import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css"

function Timer() {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    const cleanUp = () => {
      return clearInterval(intervalId);
    };
    return cleanUp;
  }, []);
  return (
    <>
      <h1 className="timerOne">Timer : {timer}</h1>
    </>
  );
}

export default Timer;
