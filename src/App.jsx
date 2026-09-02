import { Element } from 'react-scroll'
import Background from '../src/componentes/Background'
import Sobre from '../src/componentes/Sobre'
import Habilidades from './componentes/Habilidades'
import Experiencia from './componentes/Experiencia'
import Projetos from './componentes/Projetos'
import Github from './componentes/Github'

import './App.css'

function App() {
  return (
    <>
      <Background />
      <Element name='sobre'>
        <Sobre />
      </Element>
      <Element name='habilidades'>
        <Habilidades />
      </Element>
      <Element name='experiencia'>
        <Experiencia />
      </Element>
      <Element name='projetos'>
        <Projetos />
      </Element>
      <Element name='github'>
        <Github />
      </Element>
    </>
  )
}


export default App
