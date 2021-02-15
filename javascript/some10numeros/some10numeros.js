
(
    function()
    {
        const lista = [];

        for(var i = 1;i < 11; i ++) {
            lista[i] = i;
        }

        let soma = 0;
        lista.forEach(function(x) { soma += x});
        
        document.getElementById('namao').innerText = soma;

        document.getElementById('automatico').innerText = lista.reduce((soma, atual) => soma + atual);
    }
)();






