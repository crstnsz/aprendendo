using static System.Console;

int acc = 0;
WriteLine(PowerTco(2, 12512233, acc));

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

static int Power(int value, int exp)
    => exp == 1
        ? value
        : value * Power(value, exp - 1);

static int PowerTco(int value, int exp, int acc)
    => exp == 0
        ? acc
        : PowerTco(value, exp - 1, acc * exp);