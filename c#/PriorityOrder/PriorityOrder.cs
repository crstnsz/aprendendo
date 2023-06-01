using Docspider.Test.ApiClient;
using LanguageExt;
using System.Collections.Generic;
using System.Linq;
using Xunit.Abstractions;
using Xunit.Sdk;

public class PriorityOrderer : ITestCaseOrderer
{
    private record TestCaseItem(
        ITestCase TestCase,
        string MethodName,
        int Priority,
        bool Initial,
        string Next);


    public IEnumerable<TTestCase> OrderTestCases<TTestCase>(
        IEnumerable<TTestCase> testCases) where TTestCase : ITestCase
        => testCases
        .Select(testCase => new TestCaseItem
        (
            TestCase: testCase,
            MethodName: testCase.TestMethod.Method.Name,
            Priority: testCase.TestMethod.Method
                .GetCustomAttributes(typeof(OrderAttribute).AssemblyQualifiedName!)
                .FirstOrDefault()
                ?.GetNamedArgument<int>(nameof(OrderAttribute.Priority)) ?? 0,
            Initial: testCase.TestMethod.Method
                .GetCustomAttributes(typeof(InitialAttribute).AssemblyQualifiedName!)
                .Any(),
            Next: testCase.TestMethod.Method
                .GetCustomAttributes(typeof(NextAttribute).AssemblyQualifiedName!)
                .FirstOrDefault()
                ?.GetNamedArgument<string>(nameof(NextAttribute.Name)) ?? string.Empty

        
        ))
        .Apply(allTestCases => allTestCases.Any(x => x.Initial)
            ? allTestCases.Where(x => !x.Initial)
                .Select(initialTestCase => NextTestCases(initialTestCase, allTestCases))
            : allTestCases
            .OrderBy(tst => tst.Priority)
            .ThenBy(tst => tst.MethodName)
            .Select(testCase => testCase.TestCase));

    private static IEnumerable<ITestCase> NextTestCases(TestCaseItem initialTestCase, IEnumerable<TestCaseItem> allTestCases)
        => Prelude.Array(initialTestCase.TestCase)
        .Union(allTestCases
            .Where(tc => tc.MethodName == initialTestCase.Next)
            .SelectMany(x => NextTestCases(x, allTestCases)));
}