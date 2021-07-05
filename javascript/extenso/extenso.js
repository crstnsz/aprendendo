const casas = valor => Array.from(valor.toString())

const grupo = ['', 'mil', 'milhoes', 'bilhoes', 'trilhões']

function unidade (digito, indice)
{
    return {
        digito: digito,
        posicao: 2 - indice % 3,
        grupo: grupo[Math.floor(indice / 3)]
    }
}

const agrupar = (lista, item) => lista 
? lista[item.grupo].concat(item)
: lista = [item.grupo]



const extenso = valor => casas(valor)
.reverse()
.map(unidade)
.reduce((a, x) => ({...a, [x.grupo] : {...[x.grupo], x}}), {})




console.log(extenso(123456789))