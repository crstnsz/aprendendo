-- A função "diaSemana" retorna o nome do dia com base no número.
diaSemana :: Int -> String
diaSemana 1 = "Segunda-feira"
diaSemana 2 = "Terça-feira"
diaSemana 3 = "Quarta-feira"
diaSemana 4 = "Quinta-feira"
diaSemana 5 = "Sexta-feira"
diaSemana 6 = "Sábado"
diaSemana 7 = "Domingo"
diaSemana _ = "Dia inválido" -- O '_' (underscore) funciona como um "coringa" (wildcard) para qualquer outro valor.
