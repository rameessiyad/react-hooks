import { useEffect, useState } from "react";
import "./App.css";
import HookExample from "./components/hook-example";

function App() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("rendered");

    // cleanup func
    return () => {};
  }, []);
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
      <HookExample />
    </>
  );
}

export default App;
