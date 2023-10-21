import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timer, setTimer] = useState(null);

  function handleStart() {
    timerAgain = setInterval(() => {
      setSeconds((s) => s + 1);

      if (seconds == 59) {
        setMinutes((m) => m + 1);
        setSeconds(0);
      }
      if (minutes == 60) {
        setHours((h) => h + 1);
        setMinutes(0);
      }
    }, 1000);
    setTimer(timer);
  }
  return (
    <>
      <h1>Stop Watch</h1>
      <p>
        {hours < 10 ? "0" + hours : minutes} :
        {minutes < 10 ? "0" + minutes : minutes} :
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
      <button onClick={handleStart}>Start</button>
    </>
  );
}

export default StopWatch;
