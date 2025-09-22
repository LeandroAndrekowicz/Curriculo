import React, { useState, useEffect } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

import './Frase.css'

const Frase = ({frase}) => {

  function cima(event){
    event.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

  const [mensagem, setMensagem] = useState({
    autor: '',
    texto: '',
  });


  const escolheFrase = () =>{ 
    let number = Math.floor(Math.random() * 11);
    setMensagem({
      autor: frase.frases[number].autor,
      texto: frase.frases[number].texto,
    })
  }

  useEffect(() => {
    escolheFrase();
  }, [])

  return (
    <div className='container-frase'>
        <p className='aspas'>
            <i>"</i>
        </p>
        <p>{mensagem.texto}</p>
        <p className='autor'><strong>- {mensagem.autor}</strong></p>
        <p className='seta'><AiOutlineArrowUp onClick={() => cima(event)}/></p>
    </div>
  )
}

export default Frase