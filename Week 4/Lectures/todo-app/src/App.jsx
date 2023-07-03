/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTodos(data);
      });
    });
    setInterval(() => {
      fetch("http://localhost:3000/todos", { method: "GET" }).then((res) => {
        res.json().then((data) => {
          console.log(data);
          setTodos(data);
        });
      });
    }, 1000);
  }, []);
  return todos;
}

function App() {
  // const [counter, setCounter] = useState(Math.random()); // doesnt get updated on every render
  // let nonStateVar = Math.random();
  // console.log(todos);
  // console.log(counter);
  // console.log(nonStateVar);

  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div key={""}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <br />
      <button>Delete</button>
    </div>
  );
}

export default App;
