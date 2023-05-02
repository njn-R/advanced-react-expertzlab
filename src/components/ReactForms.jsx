import React, { useState } from 'react'

const ReactForms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    <>
      <form className='form'>
        <h1>React Form</h1>
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            id='id'
            name='name'
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className='form-row'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            type='email'
            id='id'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button onClick={handleSubmit} className='btn btn-block'>
          Submit
        </button>
      </form>
    </>
  )
}

export default ReactForms
