using static System.Console;

WriteLine(MdcComp(4, 10));

static int MdcComp(int a, int b)
    => a == b?a:(a > b?MdcComp(a - b, b):MdcComp(b - a, a));

static bool Maior(int a, int b)
    => a > b;

static int MdcExp(int a, int b)
    => Maior(a,b)
        ? MdcExp(b - a, a)
        : Maior(b, a)
            ?MdcExp(a - b, b)
            : a;
