from functools import reduce

lista = range(0, 11)

total = 0
for i in lista:
   total = total + i

print("Na mão")
print(total)

total = reduce(lambda x, y: x + y, lista)
print("automatico 1")
print(total)

print("automatico 2")
total = sum(lista)
print(total)

