import React from  'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'


const elemento = <h1>React</h1> 

ReactDOM.render(<Primeiro />, document.getElementById('root'))

ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('bom-dia'))

