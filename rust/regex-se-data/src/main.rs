use regex::Regex;

fn main() {
    let rx = Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();
    let certo = "2020-09-22";
    let errada = "2020-09/22";

    println!("A data {} é uma data? {}", certo, rx.is_match(certo));
    println!("A data {} é uma data? {}", errada, rx.is_match(errada));
}
