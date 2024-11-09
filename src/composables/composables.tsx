"use client";
import { useEffect, useState } from "react";

export function UseDarkMode() {
  const [isDark, setDark] = useState(false); // eslint-disable-line  @typescript-eslint/no-unused-vars
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

export function SetShrunk() {
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

export function SetThin() {
  const [isThin, setThin] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => {
      setThin(window.innerWidth < 768);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <div>Thin: {isThin}</div>;
}
