import React from 'react'
import PropTypes from 'react'

export const Componente3 = ({nombre, apellidos, ficha}) => {

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

Componente3.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

export default Componente3