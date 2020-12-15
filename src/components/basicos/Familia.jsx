import React, { cloneElement } from 'react';

// import { Container } from './styles';

export default props =>{
  return (
      <div>
         {
           props.children.map((child, i ) =>{
             return cloneElement(child, {...props, key: i} );
           })
         }
     
      </div>
  );
};
