import React, { FormEvent, useRef, useState } from "react";
import produce from "immer";

const Form2 = () => {
  const [person, setPerson] = useState({ name: "Dariel", age: 0 });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{JSON.stringify(person)}</p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          // onChange={(e) =>
          //   setPerson(
          //     produce((draft) => {
          //       draft.name = e.target.value;
          //     })
          //   )
          // }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: +(e.target?.value ?? 0) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form2;
