import React from 'react';

import './index.css';
import './App.css';

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'

import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

// import { Container } from './styles';

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
      <Card titulo="#07 -  Produtos" color="#f555d0">

      <ListaProdutos />

      </Card>

      <Card titulo="#06 -  Repetição" color="#f555d0">

              <ListaAlunos />
  
        </Card>

      <Card titulo="#05 - Desafio Familia" color="#0ddfd0">
          <Familia min={1} max={60} sobrenome="Martins">

              <FamiliaMembro nome="Pedro"/>
              <FamiliaMembro nome="Ana" />
              <FamiliaMembro nome="Gustavo"/>
          </Familia>
 
        </Card>

        <Card titulo="#04 - Desafio aleatório" color="#033fd0">
          <Aleatorio min={1} max={60}/>
 
        </Card>
        <Card titulo="#03 - Fragmento" color="#dd0">
          <Fragmento/>
        </Card>
        <Card titulo="#02 -Situação do aluno" color="#0fffd0">
          <ComParametro 
          titulo="Situação do aluno" 
          aluno="clebson"
          nota={9.5}
          />
        </Card>

        <Card titulo="#01 - Primeiro" color="#5555d0">
        <Primeiro/> 
        </Card>
      </div>

  </div>
  );
}

