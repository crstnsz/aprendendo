from functools import reduce

lista = []
for i in range(0, 11):
   lista.append(i)
   print(i)

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

