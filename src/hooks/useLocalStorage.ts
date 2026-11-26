import { useState } from "react";

/**
 * State that is also saved to `localStorage` under `key`, as JSON, so it survives a reload.
 *
 * If storage is blocked or full, or the saved value isn't valid JSON, the error is logged and the
 * state still works for this page load.
 *
 * @param key - The `localStorage` key.
 * @param initialValue - Used when nothing is saved under `key`.
 * @returns `[value, setValue]`, like `useState`. `setValue` takes a value, not an updater function.
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage("theme", "light");
 *
 * return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>;
 * ```
 */
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
