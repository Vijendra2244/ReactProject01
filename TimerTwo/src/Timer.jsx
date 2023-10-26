import React, { useEffect, useState } from "react";
import "./App.css";

function Timer() {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setTimer((time) => time - 1);
    }, 1000);
    const cleanUp = () => {
      return clearTimeout(intervalId);
    };
    return cleanUp;
  }, [timer]);
  return (
    <>
      <h1 className=" timerTwo">Timer : {timer}</h1>
    </>
  );
}

export default Timer;
