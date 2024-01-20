import React, { useState } from "react";
import AddComponent from "./add";

let nextId = 3;
const nameList = [
  {
    id: 0,
    title: "Akhrorbek",
  },
  {
    id: 1,
    title: "Doniyor",
  },
  {
    id: 2,
    title: "Muhammad Ali",
  },
];

const Main = () => {
  const [todos, setTodos] = useState(nameList);
  function hadleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
      },
    ]);
  }
  console.log("todos:", todos);

  // function onDelete() {
  //   setTodos("");
  // }
  const onDelete = (id) => {
    const resultTodo = todos.filter((a) => a.id !== id);
    setTodos(resultTodo);
  };
  return (
    <div>
      <AddComponent onAddTodo={hadleAddTodo} />
      {todos.map((todo) => (
        <div style={{ display: "flex" }} key={todo.id}>
          <p>{todo.title}</p>
          <button>edit</button>
          <button onClick={() => onDelete(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
