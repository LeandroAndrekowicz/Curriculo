import React from 'react'
import './Background.css'


const index = () => {
  return (
    <div className='container'>
        <div className="wrapper">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='container-header'>
            <div className='container-menu'>
                <a href="#">
                    <div>
                        <h1 className='logo'>Portifo
                        <span className='texto-secundario'>lio</span>
                        </h1>
                    </div>
                </a>
                <nav>
                    <ul className='nav-list'>
                        <li>
                            <a href='#'>Sobre</a>
                        </li>
                        <li>
                            <a href='#'>Projetos</a>
                        </li>
                        <li>
                            <a href='#'>Frase</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='container-bem-vindo'>
            <h4 className='container-eu-sou'>Olá, me chamo</h4>
            <h1>
                <p>Leandro 
                    <span className='container-letras'>   Andrekowicz</span>
                </p>
            </h1>
            <h4>Que tal um café? ☕</h4>
            <a href="https://www.linkedin.com/in/leandro-andrekowicz-877b81236/" className='contato'>Linkedin</a>
            <a href="https://github.com/LeandroAndrekowicz" className='contato'>Github</a>
            <a href="https://wa.me/5542988316222" className='contato'>Whatsapp</a>
        </div>
    </div>
  )
}

export default index