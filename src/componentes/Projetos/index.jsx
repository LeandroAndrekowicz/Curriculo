import React from 'react'
import './Projetos.css'
import { MdOutlineQuiz, MdDomainVerification } from 'react-icons/md'
import { GiGalaxy } from 'react-icons/gi'

const Projetos = () => {
  return (
    <div className='container-projetos'>
      <header className='container-titulo'>
        <h2>Meus Projetos</h2>
      </header>
      <div className='box'>
        <div className='container-cards'>
          <div className='card'>
            <i>
              <MdOutlineQuiz />
            </i>
            <h5>Quiz conhecimentos gerais</h5>
            <p>Quiz desenvolvido em ReactJS com intuito de aprimorar o conceito de SinglePage</p>
            <div className='links-projeto'>
              <a href="https://quiz-puce-six.vercel.app/">Vizualizar</a>
              <a href="https://github.com/LeandroAndrekowicz/Quiz">Github</a>
            </div>
          </div>
        </div>
        <div className='container-cards'>
          <div className='card'>
            <i>
              <GiGalaxy />
            </i>
            <h5>Gerador de fotos Aleatórias</h5>
            <p>Gerador de fotos desenvolvido em ReactJS com o intuito de aprimorar o consumo de API's</p>
            <div className='links-projeto'>
              <a href="https://fotos-marte.vercel.app/">Vizualizar</a>
              <a href="https://github.com/LeandroAndrekowicz/Nasa">Github</a>
            </div>
          </div>
        </div>
        <div className='container-cards'>
          <div className='card'>
            <i>
              <MdDomainVerification />
            </i>
            <h5>Classificador de e-mails</h5>
            <p>Um classificador de e-mails utilizando OpenAI e Gemini para classificar e-mails como Produtivo ou Improdutivo e sugerir uma resposta</p>
            <div className='links-projeto'>
              <a href="https://desafio-autou-fu3i.onrender.com/">Vizualizar</a>
              <a href="https://github.com/LeandroAndrekowicz/desafio-autoU">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos