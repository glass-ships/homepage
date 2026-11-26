import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ThemeToggle from "@/components/ui/ThemeToggle";

const stubPrefersLight = (prefersLight: boolean) =>
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({ matches: prefersLight, media: query })),
  );

const html = document.documentElement;
const getToggle = () => screen.getByRole("button", { name: "Light theme" });

describe("ThemeToggle", () => {
  it("uses the saved theme", () => {
    stubPrefersLight(false);
    localStorage.setItem("theme", JSON.stringify("light"));

    render(<ThemeToggle />);

    expect(html).toHaveClass("light");
    expect(getToggle()).toHaveAttribute("aria-pressed", "true");
  });

  it("falls back to the system preference when nothing is saved", () => {
    stubPrefersLight(true);
    render(<ThemeToggle />);

    expect(html).toHaveClass("light");
    expect(window.matchMedia).toHaveBeenCalledWith("(prefers-color-scheme: light)");
  });

  it("defaults to dark", () => {
    stubPrefersLight(false);
    render(<ThemeToggle />);

    expect(html).toHaveClass("dark");
    expect(getToggle()).toHaveAttribute("aria-pressed", "false");
  });

  it("switches and saves the theme on click", async () => {
    stubPrefersLight(false);
    render(<ThemeToggle />);

    await userEvent.click(getToggle());
    expect(html).toHaveClass("light");
    expect(html).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe('"light"');

    await userEvent.click(getToggle());
    expect(html).toHaveClass("dark");
    expect(html).not.toHaveClass("light");
    expect(localStorage.getItem("theme")).toBe('"dark"');
  });

  it("toggles with Enter", async () => {
    stubPrefersLight(false);
    render(<ThemeToggle />);

    getToggle().focus();
    await userEvent.keyboard("{Enter}");

    expect(html).toHaveClass("light");
  });

  it("works when storage is blocked", async () => {
    stubPrefersLight(true);
    const blocked = () => {
      throw new DOMException("blocked", "SecurityError");
    };
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(blocked);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(blocked);
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(<ThemeToggle />);
    expect(html).toHaveClass("light");

    await userEvent.click(getToggle());
    expect(html).toHaveClass("dark");
  });
});
