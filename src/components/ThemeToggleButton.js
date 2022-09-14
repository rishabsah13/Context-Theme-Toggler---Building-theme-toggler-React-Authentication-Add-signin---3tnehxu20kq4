import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const themeToggle = useContext(ThemeContext);
  const themeName = themeToggle.theme === "light" ? "dark" : "light";

  return (
    <>
      <button
        onClick={() => themeToggle.setTheme(themeName)}
        id="global-theme-toggler"
        className={`btn btn-${themeToggle.theme} txt-${themeToggle.theme}`}
      >
        Switch to {themeToggle} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
