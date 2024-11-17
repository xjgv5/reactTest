import React from 'react'

export const Componente2 = () => {

    // let libros = ["Harry Potter", "Juego de Tronos", "Clean Code"]
    let libros = []


  return (
    <div className='segundo-componente'>
        <hr />
        <h1>Listado de libros</h1>
        {libros.length >= 1 ? 
            <ul>
                {
                    libros.map((libro,indice) => {
                        return <li key={indice}>{libro}</li>
                    })
                }
            </ul>
            :
            <h2>No hay libros en existencia</h2>
        }
    </div>
  )
}

export default Componente2
