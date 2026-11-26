import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AppIcon from "@/components/ui/AppIcon";
import styles from "@/components/ui/AppIcon.module.scss";
import "@/global/icons";

describe("AppIcon", () => {
  it("renders a registered FontAwesome icon", () => {
    const { container } = render(<AppIcon icon="github" />);
    expect(container.querySelector('svg[data-icon="github"]')).not.toBeNull();
  });

  it("applies size, background, and className", () => {
    const { container } = render(<AppIcon id="icon" icon="code" size="large" background className="extra" />);

    const wrapper = container.querySelector("#icon");
    expect(wrapper).toHaveClass(styles.large, styles.background);
    expect(wrapper?.querySelector("svg")).toHaveClass(styles.appicon, styles.large, "extra");
  });

  it("uses the default color class only when no color is given", () => {
    const { container, rerender } = render(<AppIcon icon="code" />);
    expect(container.querySelector("svg")).toHaveClass(styles.defaultColor);

    rerender(<AppIcon icon="code" color="red" />);
    expect(container.querySelector("svg")).not.toHaveClass(styles.defaultColor);
  });

  it("loads custom svg icons from src/assets/icons", async () => {
    const { container } = render(<AppIcon icon="logo" />);

    // lazy-loaded: wait until the fallback is replaced
    await screen.findByText((_, element) => element?.tagName === "svg" && !element.textContent?.includes("?"));
    expect(container.querySelector("title")?.textContent).not.toBe("Unknown Icon");
  });

  it("falls back to a placeholder for unknown icons", () => {
    render(<AppIcon icon="does-not-exist" />);
    expect(screen.getByTitle("Unknown Icon")).toBeInTheDocument();
  });
});
