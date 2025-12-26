import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Type Something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        you typed : <strong>{inputValue}</strong>
      </p>
    </>
  );
}

export default App;
