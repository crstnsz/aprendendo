const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * taxaJuros * tempoAplicacao;

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let soma = capitalInicial;
    for(i = 0; i < tempoAplicacao; i ++)
    {
        soma += soma * taxaJuros;
    }

    return soma;
}

console.log(jurosSimples(1000, 0.1, 12))

console.log(jurosCompostos(1000, 0.1, 12))