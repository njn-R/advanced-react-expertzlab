import React, { useState, useEffect } from 'react'

const ShowHide = () => {

    const [show, setShow] = useState(true)
    
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <Item />}
    </div>
  );
}

const Item = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);

         return () => {
           window.removeEventListener("resize",  handleResize)
         };
    });

    return (
        <>
            <h3>Size: { windowSize }</h3>
        </>
    )
}

export default ShowHide