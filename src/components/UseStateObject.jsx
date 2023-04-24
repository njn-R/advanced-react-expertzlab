import {useState} from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 50,
    message: "Hello World",
  });

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message}</h3>
      <button className="btn btn-secondary" onClick={() => setPerson({...person,name: "Jane", age: 30})}>Change Name</button>
    </div>
  );
};

export default UseStateObject;
