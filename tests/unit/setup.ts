import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// jsdom doesn't implement <dialog> methods; mimic their effect on the `open` attribute.
HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) {
  this.open = true;
};
HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) {
  this.open = false;
};

// jsdom has no ResizeObserver; floating-ui (used by react-tooltip) needs one to position tooltips.
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.body.innerHTML = "";
  document.body.className = "";
  document.documentElement.className = "";
  document.body.removeAttribute("style");
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
