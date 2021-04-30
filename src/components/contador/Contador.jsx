import React, { Component } from "react";

import "./contador.css";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passo || 5,
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />

        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />

        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Contador;

/**
 * Comunicação Direta de componentes com estados:
 * No Componente PAI passa a modificação que o component sofreu
 * usando "(event) => setEstadoComponente(valorAlteracao)" sem usar
 * desestruturação "{}"
 */

//setNome={(novoNome) => setNome(novoNome)}
