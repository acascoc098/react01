/*import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola perros</h1>);*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const Titulo = ({subTitle})=> {
 return <div>
    <h1>Primera página React</h1>
    <h2>{subTitle}</h2>
    <p>Andrea Castilla Cocera</p>
 </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Titulo subTitle="Primeros pasos"/>
        <h3>Desarrollo de Interfaces 2ºDAM</h3>
    </div>);
//root.render(<h3>Desarrollo de Interfaces 2ºDAM</h3>); Solo se puede hacer un render, porque solo puede tener un elemento padre