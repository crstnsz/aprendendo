import React from  'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/multiplos'
import Saudacao from './componentes/saudacao'


class App extends React.Component{
    constructor(){
       super();
       this.state = {value: ''};
       this.onChange = this.onChange.bind(this)
    }
    
    onChange(e){
       const re = /^[0-9\b]+$/;
       if (e.target.value === '' || re.test(e.target.value)) {
          this.setState({value: e.target.value})
       }
    }
    
    render(){
      return <input value={this.state.value} onChange={this.onChange}/>
    }
 }
 
 ReactDOM.render(<App/>,document.getElementById('app'))