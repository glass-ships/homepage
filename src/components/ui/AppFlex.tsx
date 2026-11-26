import type React from "react";
import styles from "./AppFlex.module.scss";

export interface AppFlexProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** `"block"` takes the full width, `"inline"` only what its children need. Defaults to `"block"`. */
  flow?: "inline" | "block";
  /** Defaults to `"row"`. */
  direction?: "row" | "col";
  /** Horizontal alignment, whatever the direction. Defaults to `"center"`. */
  alignH?: "left" | "center" | "right" | "stretch";
  /** Vertical alignment, whatever the direction. Defaults to `"center"`. */
  alignV?: "top" | "center" | "bottom" | "stretch";
  /** Space between children: 0, 5, 10, 20 or 40px. Defaults to `"medium"` (20px). */
  gap?: "none" | "tiny" | "small" | "medium" | "large";
}

// map nice human align names to css flex align names
const alignMap = {
  left: "flex-start",
  top: "flex-start",
  center: "center",
  right: "flex-end",
  bottom: "flex-end",
  stretch: "stretch",
};

/**
 * Lays out its children in a row or column. Rows wrap when they run out of space.
 *
 * `alignH` and `alignV` always mean horizontal and vertical, so switching `direction` doesn't
 * change what they do.
 *
 * @example
 * ```tsx
 * <AppFlex direction="col" alignH="left" gap="small">
 *   <AppButton text="One" />
 *   <AppButton text="Two" />
 * </AppFlex>
 * ```
 */
export default function AppFlex({
  children,
  id,
  className = "",
  flow = "block",
  direction = "row",
  alignH = "center",
  alignV = "center",
  gap = "medium",
}: AppFlexProps) {
  const justifyContent = direction === "row" ? alignMap[alignH] : alignMap[alignV];
  const alignItems = direction === "row" ? alignMap[alignV] : alignMap[alignH];
  return (
    <div
      id={id}
      className={`${styles.flex}
      ${styles[flow]}
      ${styles[direction]}
      ${styles[gap]}
      ${className}`}
      style={{ justifyContent, alignItems }}
    >
      {children}
    </div>
  );
}
