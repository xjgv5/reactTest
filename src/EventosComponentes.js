import React from 'react'
import './EventosComponente.css'

export const EventosComponentes = () => {

    const handleClick = (e, nombre) => {
        alert("has dado click al boton" + nombre)
    }

  return (
    <div>
        <hr />
        <h1>Eventos en react</h1>
        {/* Evento click */}
        <button className='clickBtn' onClick={e => handleClick(e, 'Xavier')}>Click</button>

    </div>
  )
}
