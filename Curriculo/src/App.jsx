import { useState, useEffect } from 'react'
import Background from '../src/componentes/Background'
import Sobre from '../src/componentes/Sobre'
import Projetos from './componentes/Projetos'
import Frase from './componentes/Frase'

import api from './service/service'

import './App.css'

function App() {
  const [frase, setFrase] = useState();
  let [number, setNumber] = useState();
  
  const geraNumber = () =>{
    setNumber(Math.floor(Math.random() * 10));
  }
  console.log(number);

  const geraFrase = () =>{
    api.get('?term=auto+estima&max=10').then((res) =>{
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
    geraNumber();
  }, [])

  return (
    <>
      <Background />
      <Sobre />
      <Projetos />
      {frase &&
      frase.frases.map((item) =>{
        return(
          <Frase key={item.autor} frase={item.texto} />
        )
      })
    }
    </>
  )
}


export default App
