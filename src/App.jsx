import { useEffect, useRef, useState } from "react";
import "./App.css";
import HookExample from "./components/hook-example";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Type Something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <p>
        you typed : <strong>{inputValue}</strong>
      </p>
      <HookExample />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
