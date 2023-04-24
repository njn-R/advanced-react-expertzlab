import { useState } from 'react'
import './App.css'
import Fruits from "./components/Fruits";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fruits />
    </>
  );
}

export default App
