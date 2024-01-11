//PRUEBAS VARIAS 1
/*import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola perros</h1>);*/

//PRUEBAS VARIAS 2
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

//PRUEBAS VARIAS 3
import React from 'react';
import ReactDOM from 'react-dom/client';

const Titulo = (prop)=> {
    console.log(prop)
    return <h1>{prop.subTitle}</h1>
}

const Person = (props) =>{
    console.log(props)
    return <div>
        <p>Nombre: {props.nombre}</p>
        <p>Apellidos: {props.apellidos}</p>
        <p>Edad: {props.edad}</p>
    </div>;
}

function Footer(){
    return <div><p>IES Virgen del Carmen</p></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Titulo subTitle="Primeros pasos"/>
        <h2>Desarrollo de Interfaces 2ºDAM</h2>
        <Person nombre="Juan" apellidos="Pérez" edad="22"/>
        <Footer/>
    </div>);