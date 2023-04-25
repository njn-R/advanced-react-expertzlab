import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState(0)
        
    useEffect(() => {
        if (value >= 0) {
        document.title = `New Title ${value}`;
        }
        console.log("UseEffect 1 called");
    }, [value]);
    
    useEffect(() => { 
    console.log("UseEffect 2 called");

    },[data])
    
    // console.log("Component Rendered");

  return (
    <>
      <h1>UseEffectBasics</h1>
      <h2>
        Value={value} | Data={data}
      </h2>
      <button onClick={() => setValue(value + 1)}>Change Value</button>
      <button onClick={() => setData(data + 1)}>Change Data</button>
    </>
  );
};

export default UseEffectBasics;
