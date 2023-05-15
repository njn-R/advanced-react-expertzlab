import React, { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users/1'

const useFetchPerson = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState('Default Value')

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          setData(data.name)
        })
        .catch((error) => {
          setError(error.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [url])

  return {loading, error, data}
}

export default useFetchPerson
