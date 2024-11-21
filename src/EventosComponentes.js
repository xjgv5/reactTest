import React from 'react'
import './EventosComponente.css'

export const EventosComponentes = () => {

    const handleClick = (e, nombre) => {
        alert("has dado click al boton" + nombre)
    }

    function dobleClick(){
        alert("Has dado doble click")
    }

  return (
    <div className='EventoComponenteContainer'>
        <hr />
        <h1>Eventos en react</h1>
        
        <div className="button__container">
            {/* Evento click */}
            <button className='clickBtn' onClick={e => handleClick(e, 'Xavier')}>Click</button>

            {/* Evento doble click */}
            <button className='clickBtn' onDoubleClick={dobleClick}>Doble click</button>
        </div>

    </div>
  )
}
