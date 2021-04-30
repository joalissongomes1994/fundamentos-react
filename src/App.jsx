import React from "react";

import "./App.css";

import DiretaPai2 from "./comunicacaoInput/DiretaPai";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragment from "./components/basics/Fragmento";
import ComParametro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/Primeiro";

export default function App() {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card title="#13 - Comunicação Direta (INPUT)" color="#8b4242">
          <DiretaPai2 />
        </Card>

        <Card title="#12 - Desafio Mega " color="#8d6887">
          <Mega />
        </Card>

        <Card title="#12 - Contador " color="#646262">
          <Contador numeroInicial={10} />
        </Card>

        <Card title="#11 - Component Controlado (INPUT)" color="#E45F56">
          <Input />
        </Card>

        <Card title="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card title="#09 - Comunicação Direta" color="#8b4242">
          <DiretaPai />
        </Card>

        <Card title="#08 - Rederização Condicional" color="#e06abd">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Joalisson" }} />
          <UsuarioInfo />
        </Card>

        <Card title="#07 - Desafio Repetição" color="#7159c1">
          <TabelaProdutos />
        </Card>

        <Card title="#06 - Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card title="#05 - Componentes com Filhos" color="#00C8F8">
          <Familia sobrenome="Gomes">
            <FamiliaMembro nome="Joalisson" />
            <FamiliaMembro nome="Jackson" />
            <FamiliaMembro nome="Lindalva" />
            <FamiliaMembro nome="Josiane" />
          </Familia>
        </Card>

        <Card title="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={20} max={50} />
        </Card>

        <Card title="#03 - Fragmento" color="#E94C6F">
          <Fragment />
        </Card>

        <Card title="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Joalisson Gomes"
            nota={9.3}
          />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
