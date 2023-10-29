import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

function TodoApp() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(
    function () {
      fetchData(page);
    },
    [page]
  );
  async function fetchData(page) {
    setLoading(true);
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const totalCount = Number(response.headers["x-total-count"]);
      const totalPages = Math.ceil(totalCount / 10);
      setUserList(response.data);
      setTotalPages(totalPages);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className="postContainer">
      <h1 className="userPost">User's posts</h1>
      {userList &&
        userList.length > 0 &&
        userList.map((user) => (
          <div className="userData" key={user.id}>
            <h4 className="userPostData">{user.id}.{user.title}</h4>
          </div>
        ))}
        <div className="pagination">

      <button className="prev" disabled={page == 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <p className="current">{page}</p>
      <button className="next" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
        </div>
    </div>
  );
}

export default TodoApp;
