import React from "react";

import alunos from "../../data/alunos";

const ListaAlunos = (props) => {
  const li1 = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} {`->`}
        {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{li1}</ul>
    </div>
  );
};

export default ListaAlunos;
