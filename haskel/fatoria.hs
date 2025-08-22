fatorial :: Integer -> Integer
fatorial 0 = 1 -- fim da recursão
fatorial n = n * fatorial (n - 1)
