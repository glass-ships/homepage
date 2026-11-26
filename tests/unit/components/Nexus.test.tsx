import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Nexus from "@/components/Nexus";

// jsdom has no canvas; a context whose every method is a no-op lets the field of dots generate.
const fakeContext = new Proxy({} as Record<string | symbol, unknown>, {
  get: (target, key) => (key in target ? target[key] : () => {}),
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
});

/** let the debounced field generation run: generateField waits 50ms, lodash's debounce uses the real clock */
const waitForField = () => new Promise((resolve) => setTimeout(resolve, 100));

/** jsdom has no matchMedia; this fake answers the reduced-motion query */
const stubReducedMotion = (reduce: boolean) =>
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: reduce, addEventListener: () => {}, removeEventListener: () => {} })),
  );

describe("Nexus", () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      fakeContext as unknown as CanvasRenderingContext2D,
    );
    stubReducedMotion(false);
  });

  it("draws a still field when the user prefers reduced motion", async () => {
    stubReducedMotion(true);
    const setIntervalSpy = vi.spyOn(window, "setInterval");
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    render(<Nexus />);
    await waitForField();

    // the first render runs before matchMedia is read, so it may start the loop, but it must be stopped
    const started = setIntervalSpy.mock.results.map((result) => result.value);
    const cleared = new Set(clearIntervalSpy.mock.calls.map(([id]) => id));
    expect(started.filter((id) => !cleared.has(id))).toEqual([]);

    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    fireEvent.mouseDown(document); // would start a pulse
    expect(setTimeoutSpy).not.toHaveBeenCalled();
  });

  it("cancels pending pulse timers when it unmounts", async () => {
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    const { unmount } = render(<Nexus />);
    await waitForField();

    setTimeoutSpy.mockClear();
    fireEvent.mouseDown(document); // start a pulse
    const pulseTimers = setTimeoutSpy.mock.results.map((result) => result.value);
    expect(pulseTimers.length).toBeGreaterThan(0);

    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");
    unmount();

    const cleared = new Set(clearTimeoutSpy.mock.calls.map(([id]) => id));
    expect(pulseTimers.filter((id) => !cleared.has(id))).toEqual([]);
  });
});
