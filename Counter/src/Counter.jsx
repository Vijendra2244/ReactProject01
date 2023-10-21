import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
