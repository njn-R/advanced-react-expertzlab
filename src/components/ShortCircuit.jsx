import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text && "First Value";
  const secondValue = text || "Second Value";

  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* {text && <h1>Hello</h1>}
      {!text && <h1>World</h1>} */}

      <button onClick={() => setIsError(!isError)}>Toggle</button>
      <div style={{display:"block"}}>
        {isError && <h3>Error</h3>}
        {isError ? "There is an error" : "No Error"}
      </div>
    </>
  );
};

export default ShortCircuit;
