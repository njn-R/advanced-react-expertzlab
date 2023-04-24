import { useState } from 'react'
import './App.css'
import { UseStateArray } from './components/UseStateArray'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateArray/>
    </>
  )
}

export default App
