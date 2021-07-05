const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const moradorChina = e => e.pais == 'China';
const generoFeminno = e => e.genero == 'F'
const menorSalario = (funcionarioComMenorSalario, funcionario) => 
    funcionario.salario < funcionarioComMenorSalario.salario
    ? funcionario : funcionarioComMenorSalario;

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulherChinesaMenorSalario = funcionarios
        .filter(moradorChina)
        .filter(generoFeminno)
        .reduce(menorSalario)

    console.log(mulherChinesaMenorSalario)
})