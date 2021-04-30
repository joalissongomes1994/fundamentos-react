import React from "react";

import "./tabelaProdutos.css";

import produtos from "../../data/produtos";

function getLinhas() {
  return produtos.map((produto, index) => {
    return (
      <tr key={produto.id} className={index % 2 !== 0 ? "impar" : ""}>
        <td>{produto.id}</td>
        <td>{produto.nomeProduto}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });
}

const TabelaProdutos = () => {
  return (
    <div className="table-produtos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>PREÇO</th>
          </tr>
        </thead>

        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
