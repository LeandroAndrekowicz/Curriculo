import React, { useState } from 'react'
import './Frase.css'

const Frase = ({frase}) => {

  return (
    <div className='container-frase'>
        <p className='aspas'>
            <i>"</i>
        </p>
        <p>{frase}</p>
    </div>
  )
}

export default Frase