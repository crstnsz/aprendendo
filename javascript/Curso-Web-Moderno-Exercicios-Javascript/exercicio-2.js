
const equilatero = (a, b, c) => a == b && b == c
    ? "equilatero"
    : null;

const isoceles = (a, b, c) => 
    ((a == b || b == c || a == c )
    && (a != b || b != c || c != a))
    ? "isoceles"
    : null;
    
const triangulo = (a,b,c) => equilatero(a, b, c) 
    || isoceles(a, b, c)
    || "escaleno";

console.log(triangulo(10, 10, 10));
console.log(triangulo(10, 10, 11));
console.log(triangulo(11, 10, 11));
console.log(triangulo(12, 12, 11));
console.log(triangulo(12, 11, 11));
console.log(triangulo(10, 11, 12));