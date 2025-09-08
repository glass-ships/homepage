import { useEffect, useState } from "react";

// export function useIsThin() {
//   // const [isThin, setThin] = useState(false);
//   const [isThin, setThin] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 768 : false));

//   useEffect(() => {
//     const onResize = () => {
//       setThin(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return isThin;
// }

export function useIsThin() {
  const [isThin, setThin] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
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
