import React from "react";

const PassoForm = (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.setPasso(+e.target.value)}
      />
    </div>
  );
};
export default PassoForm;

/**
 * Comunicação Direta de componentes com estados:
 * No Componente FILHO passa a modificação que o component sofreu
 * usando o real valor do evento atravez das props
 * "(event) => setEstadoComponente(valorAlteracao.target.value)" sem usar
 * desestruturação "{}"
 */
