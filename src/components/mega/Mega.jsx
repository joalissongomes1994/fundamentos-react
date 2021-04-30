import React, { useState } from "react";

import "./mega.css";

const Mega = (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);

    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumero(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novosNumeros = gerarNumeroNaoContido(1, 60, nums);

        return [...nums, novosNumeros];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumero(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" - ")}</h3>
      <div className="formulario">
        <label>Quantidade de Números:</label>
        <input
          max="10"
          min="6"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumero(+e.target.value));
          }}
        />
      </div>
      <button onClick={() => setNumeros(gerarNumero(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
export default Mega;
