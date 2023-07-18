import React from 'react'
import './Projetos.css'
import {MdOutlineQuiz, MdDomainVerification} from 'react-icons/md'
import {GiGalaxy} from 'react-icons/gi'

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
              <MdOutlineQuiz/>
            </i>
            <h5>Quiz conhecimentos gerais</h5>
            <p>Quiz desenvolvido em ReactJS com intuito de aprimorar o conceito de SinglePage</p>
            <div>
              <a href="https://quiz-puce-six.vercel.app/">Vizualizar</a>
            </div>
          </div>
        </div>
        <div className='container-cards'>
          <div className='card'>
            <i>
              <GiGalaxy/>
            </i>
            <h5>Gerador de fotos Aleatórias</h5>
            <p>Gerador de fotos desenvolvido em ReactJS com o intuito de aprimorar o consumo de API's</p>
            <div>
              <a href="https://fotos-marte.vercel.app/">Vizualizar</a>
            </div>
          </div>
        </div>
        <div className='container-cards'>
          <div className='card'>
            <i>
              <MdDomainVerification/>
            </i>
            <h5>Criador de Cards</h5>
            <p>Criador de Cards com o intuito de aprimorar o conceito Reativo do ReactJS</p>
            <div>
              <a href="https://react-organo-six.vercel.app/">Vizualizar</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Projetos