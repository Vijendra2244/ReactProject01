import React from "react";
import axios from "axios";
import "./App.css"

function TodoList({ tasks, fetchTask }) {
  const deleteTasks = async (id) => {
    try {
      await axios.delete(` http://localhost:5000/tasks/${id}`);
      fetchTask();
    } catch (error) {
      console.log(error);
    }
  };
  const toggleTasks = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/tasks/${id}`);
      const task = response.data;

      task.status = !task.status;
      await axios.patch(`http://localhost:5000/tasks/${id}`, task);

      fetchTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <p className="task">
            {task.title} - {task.status ? "Complete" : "Not Completed"}
          </p>
          <button className="btnDelete" onClick={() => deleteTasks(task.id)}>Delete</button>
          <button className="btnToggle" onClick={() => toggleTasks(task.id)}>Togele</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
