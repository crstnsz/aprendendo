fn main() {
    let tupla = (10, 3.14, "Olá");

    let primeiro_elemento = tupla.0;
    let segundo_elemento = tupla.1;
    let terceiro_elemento = tupla.2;


    println!("Primeiro elelemto: {}", primeiro_elemento);
    println!("Segundo elemento: {}", segundo_elemento);
    println!("Terceiro elemento: {}", terceiro_elemento);

    let (a,b,c) = tupla;


    println!("Primeiro elelemto: {}", a);
    println!("Segundo elemento: {}", b);
    println!("Terceiro elemento: {}", c);
}


