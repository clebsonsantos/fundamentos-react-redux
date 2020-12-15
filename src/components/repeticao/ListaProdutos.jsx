import React from 'react';

import produtos from'../data/ListaProdutos';
import './ListaProdutos.css';
// import { Container } from './styles';

export default (props) => {

  function getLinhas(){
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
          <td>{produto.id}</td>
           <td>{produto.name}</td>
          <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }

  return (
    <div className='TableProducts'>
      <table border='1' >
        <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
  
        </tr>
        </thead>
        <tbody>
              {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}

