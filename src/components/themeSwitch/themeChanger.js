import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./themeChanger.scss";

export default function ThemeChanger() {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  }, [themeState]);

  return (
    <div className="cv-theme-container">
      <div className="cv-theme-icons">
      {!themeState && <FaMoon />}
      {themeState && <FaSun/>}
      </div>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={themeState}
            onChange={() => setThemeState(!themeState)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
