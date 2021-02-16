-
let rec soma = function 
  | [] -> Some 0
  | x :: t -> x + soma t;;

last [1; 2; 3];;