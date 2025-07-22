using System;

int[] value = [4, 7, 6, 9, 0, 1, 3];

for(var i = 0; i < value.Length; i ++)
{
    var j = i;

    for(var k = i + 1; k < value.Length; k ++)
    {
        if (value[k] < value[j])
            j = k;
    }
    (value[i], value[j]) = (value[j], value[i]);
}

foreach(var n in value)
{
    Console.WriteLine(n);
}
