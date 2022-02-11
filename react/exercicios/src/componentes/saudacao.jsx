import React, {Component} from "react";

export default class Saudacao extends Component {

    state = {
        tipo: "(tipo)",
        nome: "(nome)"

    }

    setTipo(e) {
        this.setState({tipo:e.target.value})
    }

    setNome(e) {
        this.setState({nome:e.target.value})
    }

    render() {
        const {tipo, nome} = this.props
        return (
            <div>
                <h1>{this.state.tipo === "(tipo)" ? tipo : this.state.tipo} {this.state.nome === "(nome)"? nome : this.state.nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={this.state.tipo} onChange={e=>this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={this.state.nome} onChange={e=>this.setNome(e)} />
            </div>
        )
    }
}