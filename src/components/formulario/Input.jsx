import React, { useState } from "react";

const Input = () => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    e.preventDefault();
    setValor(e.target.value);
  }
  return (
    <div>
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Component Controlado */}
        <input type="text" value={valor} onChange={quandoMudar} />
        <input type="text" value={valor} readOnly />
        {/* Component Não Controlado */}
        <input
          type="text"
          value={undefined}
          placeholder="Componente não controlado"
        />
      </div>
    </div>
  );
};

export default Input;
