import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
}

export default App;
