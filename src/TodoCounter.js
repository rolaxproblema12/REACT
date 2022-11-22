import React from 'react';
import './TodoCounter.css'

function TodoCounter({total ,completed }){
    return(

        <h2 className='TodoCounter'>Has completado {completed}  de {total} <span style={{color:"white"}}>TODOs</span></h2>
    )
}
export {TodoCounter};