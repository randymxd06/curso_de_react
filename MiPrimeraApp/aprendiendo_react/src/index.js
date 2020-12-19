import React from 'react';
import ReactDOM from 'react-dom';

const nombre = 'Randy';
const color = 'blue'
const jsx = (
  <>
    <h1 className="nombre_de_clase" style={{color: color}}>Hola {nombre}</h1>
    <p>Que tengas buen día</p>
  </>
);

ReactDOM.render(jsx,document.getElementById('root'));
