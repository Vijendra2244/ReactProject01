import React, { useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(10);
  const [timerStartAgain,setTimerStartAgain]=useState(null);


  function StartTiming() {
    const interval = setInterval(() => {
      setSeconds((second) => second - 1);
      if (seconds == 1) {
        setMinutes((minute) => minute - 1);
        setSeconds(60);
      }

    }, 1000);
    setTimerStartAgain(interval)
  }

  function RestartTiming() {
    setSeconds(60);
    setMinutes(10);
  }
  function StopTiming() {
    console.log("stop")
    clearInterval(timerStartAgain);
    setTimerStartAgain(null) 
  }
  return (
    <>
      <h1>Timer</h1>
      <p>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
      <button onClick={StartTiming}>Start</button>
      <button onClick={RestartTiming}>Restart</button>
      <button onClick={StopTiming}>Stop</button>
    </>
  );
}

export default Timer;
