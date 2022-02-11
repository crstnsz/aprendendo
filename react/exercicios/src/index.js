import React from  'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/multiplos'
import Saudacao from './componentes/saudacao'


const elemento = <h1>React</h1> 

ReactDOM.render(elemento, document.getElementById('Title'))

ReactDOM.render(<Primeiro />, document.getElementById('root'))

ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('bom-dia'))

ReactDOM.render(<div>
    <BoaTarde nome="Guilherme"/>
    <BoaNoite nome="Guilherme"/>
</div>, document.getElementById('multiplos'))


ReactDOM.render(<Saudacao tipo="Bom dia" nome="Guilherme"/>, document.getElementById('saudacao'))
