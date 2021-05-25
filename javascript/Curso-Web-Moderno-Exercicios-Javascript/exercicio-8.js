const jogos = "10 20 20 8 25 3 0 30 1";
const pontuacoes = jogos.split(" ");

let record = pontuacoes[0] * 1;
let contaRecord = 0;
let piorPontuacao = pontuacoes[0] * 1;
let jogoPiorPontuacao = 0;

for(i = 0; i < pontuacoes.length; i++){

    console.log(i, record, piorPontuacao, pontuacoes[i])
    if (pontuacoes[i] > record){
        contaRecord ++
        record = pontuacoes[i] * 1
    }

    if (piorPontuacao < pontuacoes[i]){
        piorPontuacao = pontuacoes[i] * 1
        jogoPiorPontuacao = i;
    }
}


console.log(contaRecord, jogoPiorPontuacao)
