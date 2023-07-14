import { useState } from 'react'
import Background from '../src/componentes/Background'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
    </>
  )
}

export default App
