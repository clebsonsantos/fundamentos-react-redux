import React from 'react';

// import { Container } from './styles';

export default (props) =>{
  const min = props.min
  const max = props.max
  const aleatorio = 
  parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p><strong>Valor minimo: </strong> {min}</p>
      <p><strong>Valor maximo: </strong> {max}</p>
      <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
    </div>
  )
}

