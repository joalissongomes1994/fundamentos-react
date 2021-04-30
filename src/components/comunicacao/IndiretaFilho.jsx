import React from "react";

const IndiretaFilho = (props) => {
  const cb = props.quandoClicar;
  const min = 50,
    max = 70;
  const gerarIdade = () => Math.floor(Math.random() * (max - min) + min);
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button onClick={() => cb("Joalisson", gerarIdade(), gerarNerd())}>
        Fornecer Infomações
      </button>
    </div>
  );
};

export default IndiretaFilho;
