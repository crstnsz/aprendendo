let rec range a b =
    if a > b then []
    else a :: range (a+1) b;;

let lista =
    range 1 10;;

let rec soma l =
match l with
    [] -> 0
    |h::t -> h+ (soma t);;

let total  = 
    soma lista

let () =
    Printf.printf "Na mão %d \n" total;;
