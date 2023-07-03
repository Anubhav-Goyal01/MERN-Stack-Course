/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";

let todos = [
  {
    title: "Learn React",
    description: "Learn ReactJS today",
    id: 1,
  },
];

function App() {
  const [todo, setTodo] = useState(todos);

  setInterval(() => {
    setTodo({
      title: "Learn React",
      description: "Learn ReactJS today",
      id: 1,
    });
  }, 1000);
  return (
    <>
      <h5>Hi there</h5>
      {todo.title}
      {todo.description}
      {todo.id}
      <PersonName firstName={"Anubhav"} lastName={"Goyal"} />
    </>
  );
}

function PersonName(props) {
  const { firstName, lastName } = props;
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
}

export default App;
