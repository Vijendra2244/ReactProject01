import React, { useState } from "react";
import axios from "axios";
import "./App.css"

function AddTask({ fetchTask }) {
  const [task, setTask] = useState("");
  const addTask = async () => {
    try {
      await axios.post(`http://localhost:5000/tasks`, {
        title: task,
        status: false,
      });
      fetchTask();
      setTask("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        className="input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btnAdd" onClick={addTask}>Add Tasks</button>
    </>
  );
}

export default AddTask;
