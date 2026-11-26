import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useMediaQuery from "@/hooks/useMediaQuery";

/** jsdom has no matchMedia; this fake lets a test flip whether the query matches */
const stubMatchMedia = (initiallyMatches: boolean) => {
  const listeners = new Set<() => void>();
  const mediaQueryList = {
    matches: initiallyMatches,
    addEventListener: vi.fn((_type: string, listener: () => void) => listeners.add(listener)),
    removeEventListener: vi.fn((_type: string, listener: () => void) => listeners.delete(listener)),
  };
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => mediaQueryList),
  );
  return {
    mediaQueryList,
    listeners,
    setMatches(matches: boolean) {
      mediaQueryList.matches = matches;
      for (const listener of listeners) listener();
    },
  };
};

describe("useMediaQuery", () => {
  it("reports whether the query currently matches", () => {
    stubMatchMedia(true);
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(true);
    expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 768px)");
  });

  it("updates when the match changes", () => {
    const media = stubMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(result.current).toBe(false);

    act(() => media.setMatches(true));

    expect(result.current).toBe(true);
  });

  it("removes its listener on unmount", () => {
    const media = stubMatchMedia(false);
    const { unmount } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(media.listeners.size).toBe(1);

    unmount();

    expect(media.listeners.size).toBe(0);
  });
});
