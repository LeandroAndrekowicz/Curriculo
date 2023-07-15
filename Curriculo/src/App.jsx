import { useState } from 'react'
import Background from '../src/componentes/Background'
import Sobre from '../src/componentes/Sobre'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Sobre />
    </>
  )
}

export default App
