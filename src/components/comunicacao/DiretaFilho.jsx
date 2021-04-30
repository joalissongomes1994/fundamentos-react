import React from "react";

const DiretaPai = (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>
        <strong>{props.idade} </strong>
      </span>
      <span>{props.nerd ? "Verdadiero" : "falso"}</span>
    </div>
  );
};

export default DiretaPai;

/**
 * Comunicação Direta de componentes com estados:
 * No Componente FILHO passa a modificação que o component sofreu
 * usando o real valor do evento atravez das props
 * "(event) => setEstadoComponente(valorAlteracao.target.value)" sem usar
 * desestruturação "{}"
 */

//onChange={(e) => props.setPasso(+e.target.value)}
