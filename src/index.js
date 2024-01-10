/*import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola perros</h1>);*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const Titulo = ({subTitle})=> {
 return <div>
    <h1>Esto es un título personalizado</h1>
    <h2>{subTitle}</h2>
    <p>Andrea Castilla Cocera</p>
 </div>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Titulo subTitle="Título 2"/>);