

fn main() {

    let lista = 0..11;
    let mut total = 0;
    for i in lista {
        total = total + i;
    }

    println!("Na mão");
    println!("{}", total);

    println!("Automatico");
    let total = (0..11).fold(0, |soma, item_atual| soma + item_atual);
    println!("{}", total);
}