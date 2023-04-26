import { useEffect, useState } from 'react'
import React from 'react'

const UseEffectCleanup = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('cleanup')
        }
    }, [])

  return (
      <>
          <h1>UseEffectCleanup</h1> 
          <h3>{width}</h3>
      </>
  )
}

export default UseEffectCleanup