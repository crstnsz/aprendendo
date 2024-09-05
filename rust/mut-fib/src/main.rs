fn main() {
  fibonacci(23);
}

fn fibonacci(value : i64) {
    if value < 0 {
        panic!("{} is negative", value);
    } else if value == 0 {
        panic!("zero is not a right argument to fibonacci()!");
    }

    let mut last = 0;
    let mut fib = 1;
    for _i in 1..value {
        println!("{}", fib);
        let x = last;
        last = fib;
        fib = x + fib;
    }

}


#[test]
fn should_be_1_1_2_3_5(){
    fibonacci(5)        
}

