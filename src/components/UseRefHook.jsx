import React, { useState, useRef, useEffect } from 'react'

const UseRefHook = () => {
  const [name, setName] = useState('')
  // const inputRef = useRef('')
  const prevValueRef = useRef('')
  const [counter, setCounter] = useState(0)

  console.log('Previous Value = ', prevValueRef.current)

  // const resetInput = () => {
  //   setName('')
  //   inputRef.current.focus()
  //   console.log(inputRef.current.value)
  // }

  useEffect(() => {
    prevValueRef.current = counter
      console.log('Current Value = ', prevValueRef.current)
      console.log('----------------------------------------');
  }, [counter])

  return (
    <div>
      <form className='form'>
        {/* <div className='form-row'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            ref={inputRef}
            className='form-input'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='button' className='btn btn-block' onClick={resetInput}>
          Reset
        </button>

        <h3>Name: {name}</h3>
        <h3>Count: {counter}</h3> */}
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setCounter(Math.ceil(Math.random() * 100))}
        >
          Random Count
        </button>
      </form>
    </div>
  )
}

export default UseRefHook
