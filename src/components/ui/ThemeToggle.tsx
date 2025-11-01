import "./ThemeToggle.scss";

export default function ThemeToggle() {
  // Get initial theme from user preference or default to dark
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = localStorage.getItem("theme") || (prefersLight ? "light" : "dark");
  document.body.classList.add(initialTheme);

  // Set checkbox state based on initial theme
  const checkbox = document.getElementById("switch") as HTMLInputElement | null;
  if (checkbox) {
    checkbox.checked = initialTheme === "light";
  }

  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  }

  return (
    <>
      <input type="checkbox" id="switch" name="theme_switch" onClick={toggleTheme} />
      <label htmlFor="switch">Toggle</label>
    </>
  );
}
