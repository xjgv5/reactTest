import React from 'react'
import PropTypes from 'react'

export const Componente3 = ({nombre, apellidos}) => {

  return (
    <div>
        <hr />
        <h2>Comunicacion entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>

        </ul>
    </div>
  )
}

Componente3.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
}

Componente3.defaultProps = {
    nombre : "John",
    apellidos: "Doe"
}

export default Componente3