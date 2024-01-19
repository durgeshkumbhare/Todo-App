import React from "react";

const SingleItems = ({ todos, removeTodo, editTodos }) => {
  console.log(todos);
  return (
    <div className="items">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="list">
            <input
              type="checkbox"
              checked={todos.isCompleted}
              onClick={() => editTodos(todo.id)}
            />
            <p>{todo.title}</p>
            <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SingleItems;
