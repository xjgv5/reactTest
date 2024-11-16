// Importar modulos o dependencias
import React from "react";

// funcion
const MyComponent = () => {

    const nombre = "Xavier"
    const web = "Youtube"
    const url = "www.youtube.com"

    let usuario = {
        nombre : "Xavier",
        apellido: "Gomez",
        web: "Youtube",
        url: "www.youtube.com"
    }

    return(
        <div className="mi-componente">
            <hr />
            <h1>Componente creado</h1>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Web: <a href={usuario.url}>{usuario.web}</a></li>
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>
    )
    
}


// Export
export default MyComponent