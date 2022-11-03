using static LanguageExt.Prelude;
using LanguageExt;

var a = Optional(1)
    .MatchUnsafe(x => x, {
        Console.WriteLine("Call none");
        return 2;
    });
    

int? i = null;
var b = Optional(i)
    .MatchUnsafe(x => x, 2);
    
Console.WriteLine($"{a} - {b}");

