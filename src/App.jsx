import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Form from "./Components/Form";
import SingleItems from "./Components/SingleItems";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (value) => {
    const newTodo = {
      id: nanoid(),
      title: value,
      isCompletetd: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const editTodos = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        const newTodo = { ...todo, isCompleted: !todo.isCompleted };
        return newTodo
      }
      return todo
    });
    setTodos(newTodos)
  };
  const removeTodo = (todoId) => {
    const newTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodo);
  };
  return (
    <main className="container">
      <Title />
      <Form addTodos={addTodos} />
      <SingleItems todos={todos} removeTodo={removeTodo} editTodos={editTodos} />
    </main>
  );
}

export default App;
