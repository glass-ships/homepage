import { useEffect, useState } from "react";

/**
 * Whether a CSS media query matches, updated when it changes (e.g. the window is resized).
 *
 * @param query - A media query, as in CSS: `"(max-width: 768px)"`.
 * @returns `false` on the first render, then whether `query` matches.
 * @example
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 768px)");
 *
 * return <p>{isMobile ? "Mobile View" : "Desktop View"}</p>;
 * ```
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);
    updateMatch();

    mediaQueryList.addEventListener("change", updateMatch);
    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

export default useMediaQuery;
