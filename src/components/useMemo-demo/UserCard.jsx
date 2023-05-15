import React from 'react'

const UserCard = ({ id, name }) => {
  return (
      <div className='card' style={{ width: '15em', height: '10em',marginTop:'10px'}}>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <a href='#' className='btn btn-secondary'>
          {id}
        </a>
      </div>
    </div>
  )
}

export default UserCard
