using System.Collections;
using System;
using System.Linq;

var lista = Enumerable.Range(1, 10);

var total = 0;
foreach (var item in lista)
{
    total += item;
}

Console.WriteLine($"Na mão {total}");

Console.WriteLine($"Automatico {lista.Sum()}");