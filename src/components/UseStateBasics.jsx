import { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("useState Basics");

  return (
    <div className="App">
      <h2>{title}</h2>
      <button
        onClick={() =>
          title == "useState Basics"
            ? setTitle("Changed title")
            : setTitle("useState Basics")
        }
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateBasics;
