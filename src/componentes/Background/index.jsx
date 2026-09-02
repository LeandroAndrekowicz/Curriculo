import './Background.css'
import MoveFundo from './MoveFundo'
import { Link } from 'react-scroll'

const index = () => {

  return (
    <div className='container'>
        
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
                            <Link to='sobre' smooth={true} duration={500} offset={-70}>Sobre</Link>
                        </li>
                        <li>
                            <Link to='habilidades' smooth={true} duration={500} offset={-70}>Habilidades</Link>
                        </li>
                        <li>
                            <Link to='experiencia' smooth={true} duration={500} offset={-70}>Experiência</Link>
                        </li>
                        <li>
                            <Link to='projetos' smooth={true} duration={500} offset={-70}>Projetos</Link>
                        </li>
                        <li>
                            <Link to='github' smooth={true} duration={500} offset={-70}>GitHub</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <MoveFundo />
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