import { render, waitFor } from "@testing-library/react";
import type React from "react";
import { describe, expect, it } from "vitest";
import AppButton from "@/components/ui/AppButton";
import AppFlex from "@/components/ui/AppFlex";
import AppIcon from "@/components/ui/AppIcon";
import AppSection from "@/components/ui/AppSection";
import "@/global/icons";

// an empty id="" is invalid HTML; with no id given, the attribute must be left out
describe("components without an id", () => {
  it.each<[string, React.ReactElement]>([
    ["AppButton", <AppButton key="b" text="Save" />],
    ["AppButton link", <AppButton key="l" text="Docs" linkTo="/docs" />],
    ["AppIcon", <AppIcon key="i" icon="code" />],
    ["AppFlex", <AppFlex key="f">content</AppFlex>],
    ["AppSection", <AppSection key="s">content</AppSection>],
  ])("%s renders no id attribute", (_name, element) => {
    const { container } = render(element);
    expect(container.querySelector("[id]")).toBeNull();
  });

  it("AppIcon with a custom svg renders no id attribute", async () => {
    const { container } = render(<AppIcon icon="logo" />);
    await waitFor(() => expect(container.querySelector("svg title")).toBeNull()); // the "Unknown Icon" fallback is gone
    expect(container.querySelector("svg")).not.toBeNull();
    expect(container.querySelector("[id]")).toBeNull();
  });
});
