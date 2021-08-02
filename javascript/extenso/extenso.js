function extenso(valor)
{
    const unidades = 
    [
        "zero",
        "um", 
        "dois", 
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
    ]

    const primeirasDezena =
    {
        10: "dez",
        11: "onze",
        12: "doze",
        13: "treze",
        14: "quatorze",
        15: "quinze",
        16: "dezesseis",
        17: "dezessete",
        18: "dezoito",
        19: "dezenove",
    }

    const demaisDezenas =
    {
        2: "vinte",
        3: "trinta",
        4: "quarenta",
        5: "cinquenta",
        6: "sessenta",
        7: "setenta",
        8: "oitenta",
        9: "noventa",
    }

    const centenas =
    {
        0: "",
        1: "cento",
        2: "duzentos",
        3: "trezentos",
        4: "quatrocentos",
        5: "quinhentos",
        6: "seiscentos",
        7: "setecentos",
        8: "oitocentos",
        9: "novecentos",
    }

   const e = (a, b) => (!!a && !! b && b != unidades[0]) 
        ? a + " e " + b
        : (!!a?a:b)


    const separarBloco = (valor, de, ate) => Math.trunc(valor / de) % ate
    const centena = valor => separarBloco(valor, 100, 1000)
    const dezena = valor => separarBloco(valor, 10, 100)
    const unidade = valor => valor % 10

    const extensoDez = (valor) => dezena(valor) == 1
        ? primeirasDezena[valor]
        : e(demaisDezenas[dezena(valor)], unidades[unidade(valor)]);

    const vazioSeZero = (setenca) => setenca == unidades[0]
        ? ""
        : setenca
    
    const aplicarFuncaoNaParcial = (valor, funcao) => vazioSeZero(funcao(valor))

    const extensoCentena = valor => valor == 100 
        ? "cem"
        : e(centenas[centena(valor)], aplicarFuncaoNaParcial(valor % 100, extensoDez))
    
    const casoZero = valor => valor == 0 
        ? unidades[0]
        : extensoCentena(valor);
    
    return casoZero(valor)
}

module.exports = extenso

