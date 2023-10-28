import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
   
    document.title = `Count is ${count}`;
  },[count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className=" timerHeading">Counter : {count}</h1>
      <br/>
      <button className="add" onClick={handleClick}> Add</button>
    </>
  );
}

export default Counter;
