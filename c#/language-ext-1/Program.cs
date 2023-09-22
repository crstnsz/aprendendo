#nullable enable

using static LanguageExt.Prelude;
using LanguageExt;

namespace Teste;

public class Program
{

    public static int Main(string[] args)
    {
        var a = Optional(1)
        .MatchUnsafe(x => x, () => {
            Console.WriteLine("Call none");
            return 2;
        });
        

    int? i = null;
    var b = Optional(i)
        .MatchUnsafe(x => x, 2);
        
    Console.WriteLine($"{a} - {b}");

    RC[] rs = new RC[]
    {
        new RC(null),
        new RC(new RB(null)),
        new RC(new RB(new RA("X")))
    };

        foreach (var r in rs)
            Console.WriteLine(r
        .Apply(Prelude.Optional)
        .Match(x => x.RB, Prelude.None)
        .Match(
            .Map(x => x.RB.Apply(Prelude.Optional)
                .Map(x => x.RA.Apply(Prelude.Optional)
                .Map(x => x.A))))
        .MatchUnsafe(x => x, "nops"));

        return 1;
    }
}



record RA(string? A);
record RB(RA?  RA);
record RC(RB? RB);

