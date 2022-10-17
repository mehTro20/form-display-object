import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [people, setPeople] = useState([]);

  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const surnameHandle = (e) => {
    setSurname(e.target.value);
  };
  const ageHandle = (e) => {
    setAge(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    setPeople([...people, { firstname: name, lastname: surname, age: age }]);
    setName("");
    setSurname("");
    setAge(0);
  };
  console.log(people);

  return (
    <div className="App">
      <div className="form">
        <label>
          Name:
          <input
            placeholder="enter your name"
            onChange={nameHandle}
            value={name}
          />
        </label>
        <label>
          Surname:
          <input
            placeholder="enter your surname"
            onChange={surnameHandle}
            value={surname}
          />
        </label>
        <label>
          Age:
          <input
            placeholder="age?"
            type="number"
            onChange={ageHandle}
            value={age}
          />
        </label>
        <button type="submit" onClick={submitHandle}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
