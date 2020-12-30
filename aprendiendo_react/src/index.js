import React from 'react';
import ReactDOM from 'react-dom';

const nombre = 'Randy';
const color = 'blue';

const jsx = (
  <>
    <h1 className="titulo" style={{color: color}}>Hola {nombre}</h1>
    <p></p>
  </>
);
ReactDOM.render(jsx,document.getElementById('root'));
