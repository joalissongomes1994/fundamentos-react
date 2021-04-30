import React from "react";

export default function ComParametro(props) {
  const situacao = props.nota >= 7 ? "aprovado" : "em recuperação";
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>e está
        <strong> {situacao}</strong>
      </p>
    </div>
  );
}
