import React, { useState } from "react";

import Input from "./Input";
import Display from "./Display";

const DiretaPai = (props) => {
  const [nome, setNome] = useState("");

  return (
    <div>
      <Input nome={nome} setNome={(novoNome) => setNome(novoNome)} />
      <Display mostrar={nome} />
    </div>
  );
};

export default DiretaPai;

/**
 * Comunicação Direta de componentes com estados:
 * No Componente PAI passa a modificação que o component sofreu
 * usando "(valorAlteracao) => setEstadoComponente(valorAlteracao)" sem usar
 * desestruturação "{}"
 */
