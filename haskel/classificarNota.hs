classificarNota :: Int -> String
classificarNota nota
   | nota >= 90 = "Excelente"
   | nota >= 75 = "Bom"
   | nota >= 50 = "Suficiente"
   | otherwise = "Insuficiente"

