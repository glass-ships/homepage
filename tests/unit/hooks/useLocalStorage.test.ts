import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useLocalStorage from "@/hooks/useLocalStorage";

describe("useLocalStorage", () => {
  it("returns the initial value when nothing is stored", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    expect(result.current[0]).toBe("light");
  });

  it("returns the stored value when one exists", () => {
    localStorage.setItem("settings", JSON.stringify({ compact: true }));
    const { result } = renderHook(() => useLocalStorage("settings", { compact: false }));
    expect(result.current[0]).toEqual({ compact: true });
  });

  it("updates both state and storage", () => {
    const { result } = renderHook(() => useLocalStorage("count", 0));

    act(() => result.current[1](5));

    expect(result.current[0]).toBe(5);
    expect(localStorage.getItem("count")).toBe("5");
  });

  it("falls back to the initial value when the stored value isn't valid json", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    localStorage.setItem("broken", "{not json");

    const { result } = renderHook(() => useLocalStorage("broken", "fallback"));

    expect(result.current[0]).toBe("fallback");
    expect(consoleError).toHaveBeenCalledOnce();
  });

  it("keeps the new state even if storage fails", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    const { result } = renderHook(() => useLocalStorage("full", "a"));

    act(() => result.current[1]("b"));

    expect(result.current[0]).toBe("b");
    expect(consoleError).toHaveBeenCalledOnce();
  });
});
