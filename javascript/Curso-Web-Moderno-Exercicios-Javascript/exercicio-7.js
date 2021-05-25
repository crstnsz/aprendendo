const delta = (a, b, c) => Math.sqrt(Math.pow(b, 2) - 4 * a * c);

const bhaskara = (a, b, c) => [(-b + delta(a,b,c)) / (2*a),  (-b - delta(a,b,c)) / (2*a)];


console.log(bhaskara(1, 12, -13))