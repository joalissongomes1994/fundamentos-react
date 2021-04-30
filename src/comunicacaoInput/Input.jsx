import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>Nome:</label>
      <input
        type="text"
        value={props.nome}
        onChange={(e) => props.setNome(e.target.value)}
      />
    </div>
  );
};

export default Input;

/**
 * Comunicação Direta de componentes com estados:
 * No Componente FILHO passa a modificação que o component sofreu
 * usando o real valor do evento atravez das props
 * "(event) => setEstadoComponente(valorAlteracao.target.value)" sem usar
 * desestruturação "{}"
 */
