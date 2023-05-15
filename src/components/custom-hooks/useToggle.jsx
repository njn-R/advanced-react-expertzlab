import React from 'react'

const useToggle = (defaultValue) => {
    const [toggle, setToggle] = React.useState(defaultValue)
    
    const toggleFunc = () => {
        setToggle(!toggle)
    }

    return { toggle, toggleFunc }
}

export default useToggle