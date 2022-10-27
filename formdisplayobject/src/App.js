import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: 0,
    transport: "",
  });
  const [people, setPeople] = useState([]);

  const formHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    setPeople([...people, form]);
  };

  console.log(people);

  return (
    <div className="App">
      <div className="form">
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="enter your name"
            onChange={formHandle}
            value={form.name}
            name="name"
          />
          <label for="form-floating">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="enter your surname"
            onChange={formHandle}
            value={form.surname}
            name="surname"
          />
          <label for="form-floating">Surname</label>
        </div>
        <div className="form-floating">

          <input
            className="form-control"
            placeholder="age?"
            type="number"
            onChange={formHandle}
            value={form.age}
            name="age"
            />
        <label for="floatingAge">
          Age
        </label>
            </div>
        <label>Do You Have Transport?</label>
        <label></label>
        <form name="formName">
          <input
            type="checkbox"
            name={"transport"}
            title="checkbox"
            value="yes"
            onChange={formHandle}
            checked={form.transport === "yes"}
          />
          Yes
          <input
            type="checkbox"
            name={"transport"}
            title="checkbox"
            value="no"
            onChange={formHandle}
            checked={form.transport === "no"}
          />
          No
        </form>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={submitHandle}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
