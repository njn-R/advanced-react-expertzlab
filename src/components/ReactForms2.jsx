import React from 'react'

const ReactForms2 = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
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
            id='name'
            name='name'
            value={user.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-row'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-row'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input
            className='form-input'
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={handleSubmit} className='btn btn-block'>
          Submit
        </button>
      </form>
    </>
  )
}

export default ReactForms2
