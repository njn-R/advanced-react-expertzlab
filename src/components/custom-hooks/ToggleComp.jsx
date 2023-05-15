import React from 'react'
import useToggle from './useToggle'

const ToggleComp = () => {
    const {toggle, toggleFunc} = useToggle(false)

  return (
    <div className='container'>
      <h4>Toggle Content</h4>
      <button className='btn' onClick={toggleFunc}>
        Toggle
      </button>
      {toggle && <h4>Show this content</h4>}
    </div>
  )
}

export default ToggleComp
