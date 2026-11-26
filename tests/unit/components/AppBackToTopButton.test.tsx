import { fireEvent, render, screen } from "@testing-library/react";
import { Profiler } from "react";
import { describe, expect, it, vi } from "vitest";
import AppBackToTopButton from "@/components/ui/AppBackToTopButton";
import "@/global/icons";

describe("AppBackToTopButton", () => {
  // hidden: true because the button is display:none until the page is scrolled
  it("names the button with ariaLabel", () => {
    render(<AppBackToTopButton ariaLabel="Scroll up" />);

    expect(screen.getByRole("button", { name: "Scroll up", hidden: true })).toBeInTheDocument();
  });

  it("defaults the name to 'Back to top'", () => {
    render(<AppBackToTopButton />);

    expect(screen.getByRole("button", { name: "Back to top", hidden: true })).toBeInTheDocument();
  });

  it("doesn't re-render while scrolling unless the button appears or hides", () => {
    const onRender = vi.fn();
    render(
      <Profiler id="top" onRender={onRender}>
        <AppBackToTopButton />
      </Profiler>,
    );
    const scrollTo = (y: number) => {
      Object.defineProperty(window, "scrollY", { value: y, configurable: true });
      fireEvent.scroll(window);
    };
    onRender.mockClear();

    // still under the threshold (10% of jsdom's 768px window)
    scrollTo(10);
    scrollTo(20);
    scrollTo(30);
    expect(onRender).not.toHaveBeenCalled();

    scrollTo(500);
    expect(screen.getByRole("button", { name: "Back to top" })).toBeVisible();

    // past the threshold, more scrolling changes nothing either
    onRender.mockClear();
    scrollTo(600);
    scrollTo(700);
    expect(onRender).not.toHaveBeenCalled();

    scrollTo(0);
    expect(screen.queryByRole("button", { name: "Back to top" })).toBeNull();
  });
});
