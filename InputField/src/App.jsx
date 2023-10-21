import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setText("");
  };
  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Enter Here"
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default App;
