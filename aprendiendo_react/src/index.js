import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card'

const nombre = 'Randy';
const color = 'blue';
const sesion = true;
const pais = 'República Dominicana';

const jsx = (
  
  <>{/*Para mostrar contenido debemos poner todo dentro de un div o podemos poner todo dentro de las flechas <> </>*/}
    {/*Le pregunto que si sesion es true me muestre su contenido (caso verdadero ?) sino que muestre un parrafo que diga que no ha iniciado sesion (caso contrario :)*/}
    {sesion === true ?
    <div>
      {/*Las clases se ponen con className, los style ven dentro de comillas cada propiedad*/}
      <h1 className="titulo" style={{color: color}}>Hola {nombre}</h1>
      <p>Que tengas un buen día</p>
      {/*Le pregunto que si país existe que muestre el párrafo con el país*/}
      {pais && <p>Tu eres de {pais}</p>}
    </div>
    : 
    <p>No has iniciado sesion</p>}
  </>
);
//Esta es otra manera de hacer la validación de si la sesion es true, solo que abajo hay que poner el nombre de la función en vez de la variable jsx//
/*
const verificarSesion = (sesion) => {
  if(sesion === true){
    return jsx;
  } else {
    return <h1>No has iniciado sesion</h1>
  }
}
*/

ReactDOM.render(<Card/>,document.getElementById('root'));