import React, { useMemo } from 'react'
import data from '../../data/data'
import UserCard from './UserCard'

const Users = () => {
  const [users, setUsers] = React.useState(data)
  const [counter, setCounter] = React.useState(0)

  const displayUsers = useMemo(
    () =>
      users.map((user) => {
        console.log('Preparing card')

        return <UserCard key={user.id} {...user} />
      }),
    [users]
  )

  return (
    <div className='container'>
      <h3>Counter</h3>
      <h4>{counter}</h4>
      <button
        className='btn btn-primary'
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>

      <h3 className='mt-5'>Use Memo Hook</h3>
      {displayUsers}
    </div>
  )
}

export default Users
