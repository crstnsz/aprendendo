using Dawn;

int? value = null;

//var test = Guard.Argument(value, nameof(value)).NotNull();

var list = new List<string>() { "a", "b", "c", "d", "e"};

var teste = Guard.Argument(list, nameof(list)).NotEmpty(v => $"deu ruim {v}").Modify(l => string.Join('-', l));

Console.WriteLine(teste);
