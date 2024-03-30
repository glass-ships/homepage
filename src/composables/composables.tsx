"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  // return [isDark, () => setDark(!isDark)];
  return <div>Dark Mode: {isDark}</div>;
}

function setShrunk() {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
          return true;
        }

        if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }

        return isShrunk;
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div>Shrunk: {isShrunk}</div>;
}
