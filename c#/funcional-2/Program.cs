using static System.Console;
using static System.Convert;

var valor = ReadLine();

var numero = ToInt32(valor);

WriteLine(Fatorial(numero));

static int Fatorial(int numero) => numero switch 
{
    0 => 1,
    1 => 1,
    2 => 2,
    _ => numero * Fatorial(numero - 1)
};