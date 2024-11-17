import React from 'react'

export const Componente3 = ({nombre, apellidos, ficha}) => {

    // console.log(props)

  return (
    <div>
        <hr />
        <h2>Comunicacion entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.alergias}</li>
        </ul>
    </div>
  )
}

export default Componente3