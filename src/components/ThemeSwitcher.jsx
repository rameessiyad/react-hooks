import React, { useContext } from "react";
import { ThemeContext } from "../theme-context";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>{isDarkMode ? "Light" : "Dark"}</button>
    </div>
  );
};

export default ThemeSwitcher;
