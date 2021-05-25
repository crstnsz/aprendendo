const deslocamento = (valor, casas) => valor * Math.pow(10, casas);

const decimais = (valor, casas) => Math.floor(deslocamento(valor - Math.floor(valor), casas))

const dinheiro = (valor) => `R$ ${Math.floor(valor)},${decimais(valor, 2)}`;

console.log(dinheiro(10/3));


const dinheiro2 = valor => `R$ ${valor
    .toFixed(2)
    .toString()
    .replace(".", ",")}`;

  console.log(dinheiro2(10/3));