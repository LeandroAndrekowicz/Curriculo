import React from 'react'
import './Sobre.css'

const Sobre = () => {
  return (
    <div className='container-sobre'>
        <div className='container-foto'>    
            <figure>
                <img src="https://github.com/LeandroAndrekowicz.png" alt="minha foto" />
            </figure>
            <div className='container-texto'>
                <h2>Sobre mim</h2>
                <h5>
                    Programador 
                    <span>
                        & Estudante
                    </span>
                </h5>
                <p>

                    Sou desenvolvedor backend com experiência em construção de APIs REST utilizando NestJS. Também uma forte paixão por tecnologia e programação, além de um grande interesse em RPGs e música.

                    Estou sempre em busca de aprendizado e aceitando novos desafios para aprimorar minhas habilidades. Atualmente, trabalho como desenvolvedor backend na Pormade Portas, onde colaboro em projetos inovadores e contribuo para a evolução da infraestrutura.
                
                </p>
            </div>
        </div>
    </div>
  )
}

export default Sobre