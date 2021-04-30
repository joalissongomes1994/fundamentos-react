import React from "react";

const Aleatorio = ({ max, min }) => {
  const aleatorio = Math.floor(Math.random() * (max - min) + min);
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>
        Valor Máximo: <strong>{max}</strong>
      </p>
      <p>
        Valor Mínimo: <strong>{min}</strong>
      </p>
      <p>
        Valor Escolhido: <strong>{aleatorio}</strong>
      </p>
    </>
  );
};

export default Aleatorio;
