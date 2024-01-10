/*import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola perros</h1>);*/

/*import React from 'react';
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
    </div>);*/
//root.render(<h3>Desarrollo de Interfaces 2ºDAM</h3>); Solo se puede hacer un render, porque solo puede tener un elemento padre

import React from 'react';
import ReactDOM from 'react-dom/client';

const Titulo = (prop)=> {
    console.log(prop)
    return <h2>{prop.subTitle}</h2>
}

const Person = (props) =>{
    console.log(props)
    return <div>
        <h1>Nombre: {props.nombre}</h1>
        <h1>Apellidos: {props.apellidos}</h1>
        <h1>Edad: {props.edad}</h1>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Titulo subTitle="Primeros pasos"/>
        <h3>Desarrollo de Interfaces 2ºDAM</h3>
        <Person nombre="Juan" apellidos="Pérez" edad="22"></Person>
    </div>);