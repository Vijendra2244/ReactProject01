import React, { useEffect, useState } from "react";
import "./App.css";

function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prev) => {
        console.log(prev);
        if (prev == 1) {
          clearInterval(intervalId);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="timerHeading">Counter : {timer}</h1>
      </div>
    </>
  );
}

export default Timer;
