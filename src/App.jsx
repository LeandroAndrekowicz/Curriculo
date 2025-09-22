import { useState, useEffect } from 'react'
import Background from '../src/componentes/Background'
import Sobre from '../src/componentes/Sobre'
import Projetos from './componentes/Projetos'
import Frase from './componentes/Frase'

import api from './service/service'

import './App.css'

function App() {
  const [frase, setFrase] = useState();

  const geraFrase = () =>{

    api.get(`/?term=futuro-disciplina&max=10`).then((res) =>{
      if(res.data.erro){
        alert("erro ao gerar a frase");
      }
      else{
        setFrase(res.data)
      }
    })
  }
  
  useEffect(() => {
    geraFrase();
  }, [])

  return (
    <>
      <Background />
      <Sobre />
      <Projetos />
      {frase &&
          <Frase frase={frase}/>
      }
    </>
  )
}


export default App
