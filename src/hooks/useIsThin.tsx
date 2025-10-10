import { useEffect, useState } from "react";

export function useIsThin() {
  const [isThin, setThin] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setThin("matches" in e ? e.matches : mq.matches);
    };

    mq.addEventListener("change", handler as EventListener);
    return () => mq.removeEventListener("change", handler as EventListener);
  }, []);

  return isThin;
}
