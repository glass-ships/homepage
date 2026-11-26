import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AppGrid from "@/components/ui/AppGrid";
import styles from "@/components/ui/AppGrid.module.scss";

describe("AppGrid", () => {
  it("uses the module's class for its column count", () => {
    const { container } = render(
      <AppGrid cols={4}>
        <p>a</p>
      </AppGrid>,
    );
    expect(container.firstChild).toHaveClass(styles.gallery, styles["cols-4"]);
  });
});
