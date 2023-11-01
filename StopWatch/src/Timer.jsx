import { useEffect, useState, useRef } from "react";

function fixtimeString(num) {
  return num <= 9 ? `0${num}` : `${num}`;
}

const formatTime = (timeInSecs) => {
  const seconds = timeInSecs % 60;
  const minutes = Math.floor(timeInSecs / 60) % 60;
  const hours = Math.floor(timeInSecs / 3600);
  return `${fixtimeString(hours)}:${fixtimeString(minutes)}:${fixtimeString(
    seconds
  )}`;
};

function Timer() {
  const [count, setCount] = useState(3600);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      stopTimer();
    };
    return cleanup;
  }, []);
 
  const startTimer = () => {
    if (intervalRef.current !== null) {
      console.log(`timer is already running`);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalRef.current);
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    console.log(`timer stopped`);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(3600);
  };

  return (
    <div>
      <h6>{formatTime(count)} </h6>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Timer;