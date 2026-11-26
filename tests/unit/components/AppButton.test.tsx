import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import AppButton from "@/components/ui/AppButton";
import styles from "@/components/ui/AppButton.module.scss";
import { LinkContext } from "@/components/ui/LinkContext";
import "@/global/icons";

const CustomLink = (props: React.ComponentProps<"a">) => <a data-custom {...props} />;

describe("AppButton", () => {
  it("renders a button with its text and default styles", () => {
    render(<AppButton text="Save" />);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass(styles.button, styles.primary, styles.normal, styles.text);
  });

  it("applies color and design styles", () => {
    render(<AppButton text="Delete" color="secondary" design="small" />);
    expect(screen.getByRole("button")).toHaveClass(styles.secondary, styles.small);
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<AppButton text="Save" onClick={onClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("calls onKeyDown on key presses", async () => {
    const onKeyDown = vi.fn();
    render(<AppButton text="Save" onKeyDown={onKeyDown} />);

    screen.getByRole("button").focus();
    await userEvent.keyboard("{Enter}");

    expect(onKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: "Enter" }));
  });

  it("renders a link when given linkTo", () => {
    render(<AppButton text="Docs" linkTo="/docs" />);

    const link = screen.getByRole("link", { name: "Docs" });
    expect(link).toHaveAttribute("href", "/docs");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("puts ariaLabel on links too", () => {
    render(<AppButton icon="code" ariaLabel="Source code" linkTo="/source" />);
    expect(screen.getByRole("link", { name: "Source code" })).toHaveAttribute("href", "/source");
  });

  it("renders links with the component from LinkContext", () => {
    render(
      <LinkContext value={CustomLink}>
        <AppButton text="Docs" linkTo="/docs" />
      </LinkContext>,
    );

    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("data-custom");
  });

  it("opens links in a new tab when newTab is set", () => {
    render(<AppButton text="Docs" type="link" linkTo="https://example.com" newTab />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("submits its form when type is submit", async () => {
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <AppButton text="Send" type="submit" />
      </form>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it("calls onClick on submit buttons too", async () => {
    const onClick = vi.fn();
    render(<AppButton text="Send" type="submit" onClick={onClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("places the icon after the text by default and before it when iconPosition is left", () => {
    const { rerender } = render(<AppButton text="Next" icon="angle-right" />);
    let [first, second] = screen.getByRole("button").children;
    expect(first).toHaveTextContent("Next");
    expect(second.querySelector('svg[data-icon="angle-right"]')).not.toBeNull();

    rerender(<AppButton text="Next" icon="angle-right" iconPosition="left" />);
    [first, second] = screen.getByRole("button").children;
    expect(first.querySelector('svg[data-icon="angle-right"]')).not.toBeNull();
    expect(second).toHaveTextContent("Next");
  });

  it("renders an icon-only button named by ariaLabel", () => {
    render(<AppButton icon="bars" ariaLabel="Menu" />);

    const button = screen.getByRole("button", { name: "Menu" });
    expect(button.querySelector('svg[data-icon="bars"]')).not.toBeNull();
    expect(button).not.toHaveClass(styles.text);
  });

  it("colors the icon like the button text unless iconColor is set", () => {
    render(<AppButton icon="bars" ariaLabel="Menu" />);
    expect(screen.getByRole("button").querySelector("svg")).toHaveAttribute("color", "currentColor");
  });
});
