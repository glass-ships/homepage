import { useEffect, useRef } from "react";
import "./ThemeToggle.scss";
import { Tooltip } from "react-tooltip";

export default function ThemeToggle() {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Get initial theme from user preference or default to dark
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = localStorage.getItem("theme") || (prefersLight ? "light" : "dark");
    document.body.classList.add(initialTheme);

    // Set checkbox state based on initial theme
    if (checkboxRef.current) {
      checkboxRef.current.checked = initialTheme === "light";
    }
  }, []);

  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <>
      <input type="checkbox" id="toggleCheckbox" ref={checkboxRef} onClick={toggleTheme} />
      <label id="toggleLabel" htmlFor="toggleCheckbox">Toggle</label>
      <Tooltip anchorSelect="#toggleLabel" content="Toggle Theme" clickable />
    </>
  );
}
