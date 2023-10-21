import React from "react";
import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    const newTodo = {
        title: text,
        status: false,
        id: Math.random(),
    };
    let updateTodo = [...todos, newTodo];
    setTodos(updateTodo);
    setText("");
    // console.log(updateTodo);
  };
  const ToggleButton = (id) => {
    const updateTodoAfterToggle = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    )
    setTodos(updateTodoAfterToggle);
  };
  const  DeleteButton = (id)=>{
   const deleteTodo = todos.filter((item)=>item.id!==id)
   setTodos(deleteTodo)
  }
  return (
    <>
      <input value={text} onChange={handleChange} placeholder="Add todos" />
      <button onClick={handleClick}>Add Todos</button>
      
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.title }-{item.status ? "Completed" : "Not Completed"}
            </p>
            <button onClick={() => ToggleButton(item.id)}>Toggle</button>
            <button onClick={() => DeleteButton(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
