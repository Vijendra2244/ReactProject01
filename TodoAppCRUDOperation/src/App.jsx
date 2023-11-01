import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "./Addtask";
import TodoList from "./TodoList";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTask = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        ` http://localhost:5000/tasks?_limit=10&_page=${page}`
      );
      const pageCount = Number(res.headers["x-total-count"]);
      const totalPages = Math.ceil(pageCount / 10);
      setTasks(res.data);
      setTotalPages(totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTask();
  }, [page]);
  return (
    <div className="main">
      
      <div>
        {error && <div>error : {error}</div>}
        <AddTask fetchTask={fetchTask} />
        {loading ? (
          <div>Loading.....</div>
        ) : (
          <TodoList tasks={tasks} fetchTask={fetchTask} />
        )}
        <div>
          <button
            className="btn"
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
          <button
            className="btnOne"
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
