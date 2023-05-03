import React from 'react'

const ReactForms2 = () => {
  const courses = ["Angular", "React", "Vue", "Python"]
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    offers: false,
    course: "Angular"
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    type === 'checkbox' ? setUser({ ...user, [name]: e.target.checked }) : setUser({ ...user, [name]: value })
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
        <div className='form-row'>
          <label className='form-label' htmlFor='offers'>
            Offers
          </label>
          <input
            className='form-input-checkbox'
            type='checkbox'
            id='offers'
            name='offers'
            checked={user.offers}
            onChange={handleChange}
          ></input>
        </div>
        <select
          name='course'
          id='course'
          value={user.course}
          onChange={handleChange}
        >
          {courses.map((course) => {
            return <option key={course}>{course}</option>
          })}
        </select>
        <button onClick={handleSubmit} className='btn btn-block'>
          Submit
        </button>
      </form>
    </>
  )
}

export default ReactForms2
