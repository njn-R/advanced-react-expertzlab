import React, {useState} from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text && 'First Value'
  const secondValue = text || 'Second Value'

  return (
  <>   
      <h1>{firstValue}</h1>
      <h2>{secondValue}</h2>
  </>
  )
}

export default ShortCircuit