import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(true);
  let trueGreen = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
  };
  let falseRed = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
  };
  return (
    <>
      {flag ? <Timer /> : null}
      <button
        style={flag ? trueGreen : falseRed}
        onClick={() => {
          setFlag(!flag);
        }}
      >
        {flag.toString()}
      </button>
    </>
  );
}

export default App;
