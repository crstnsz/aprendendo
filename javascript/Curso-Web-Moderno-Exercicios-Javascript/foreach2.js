const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

Array.prototype.forEach2 = function (fx) {
    for(var i in this)
    {
        fx(this[i], i);
    }

}


aprovados.forEach2(function (nome, indice) {
    console.log(`${indice}) ${nome}`)
})