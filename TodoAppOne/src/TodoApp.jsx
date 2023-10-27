import React, { useEffect, useState } from "react";
import axios from "axios";

async function getData(url) {
  try {
    let response = await axios.get(url);
    const totalCount = Number(response.headers["x - total - count"]);
    const totalPages = Math.ceil(totalCount / 10);
    return { data: response?.data, totalPages: totalPages };
  } catch (error) {
    console.log(error);
  }
}

function TodoApp() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
      let response = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const { data, totalPages } = response;
      setUserList(data);
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
    <>
      <h1>User's posts</h1>
      {userList &&
        userList.length > 0 &&
        userList.map((user) => (
          <div key={user.id}>
            <h1>{user.title}</h1>
          </div>
        ))}
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <p>current page : {page}</p>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
}

export default TodoApp;
