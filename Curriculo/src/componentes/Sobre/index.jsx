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

            Developer, com conhecimentos em HTML, CSS, JavaScript,
            React.js, consumo de APIs.
            Sou apaixonado por tecnologia, programação, 
            jogos RPG e musicas. 
            Tenho muita sede por aprendizado e estou diariamente me colocando em desafios para evoluir meu aprendizado
          
                </p>
            </div>
        </div>
    </div>
  )
}

export default Sobre