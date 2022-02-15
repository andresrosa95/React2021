import React from 'react';

const Resumen = ({idOrder}) => {

  return <div>
    <h1>GRACIAS POR SU COMPRA!</h1>

       <br/>

      <h2>Su código de seguimiento es: <br />  <h1>"{idOrder}"</h1></h2>
      <h3>A la brevedad le llegará un E-mail con el resumen de su compra</h3>
  </div>;
};

export default Resumen;
