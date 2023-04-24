import React, { useState} from 'react'
import data from '../data/data'

export const UseStateArray = () => {
    const [people, setPeople] = useState(data)


  return (
      <div>
          <h2>UseStateArray</h2>
          {people.map((person) => {
              const { id, name } = person
              return (
                <div
                  key={id}
                  className="card my-2"
                  style={{
                    width: 500,
                  }}
                >
                  <div className="card-body">
                    <h3 className="card-text">
                      {name}{" "}
                      <button className='btn btn-danger'
                        onClick={() =>
                          setPeople(people.filter((person) => person.id !== id))
                        }
                      >
                        X
                      </button>
                    </h3>
                  </div>
                </div>
              );
          })}
          <button onClick={()=> setPeople([])}>Clear All</button>
      </div>
  )
}

export default UseStateArray;