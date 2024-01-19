import React, { useState } from "react";

const Form = ({addTodos}) => {
  const [value, setValue] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value)
    setValue('')
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
       <div className="form-control">
       <input
          type="text"
          value={value}
          placeholder="Add tasks"
          className="form-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="add-btn">Add</button>
       </div>
      </form>
    </section>
  );
};

export default Form;
