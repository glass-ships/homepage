import React from "react";
import styles from "./AppGrid.module.scss";

export interface AppGridProps {
  /**
   * Columns on screens 900px and wider. Narrower screens get fewer: 1 below 600px, then 2.
   * With 4 or 5 columns, 2 below 600px, then 3. Defaults to 3.
   */
  cols?: number;
  /** Each child becomes one cell. */
  children?: React.ReactNode;
}

/**
 * Lays out its children in a grid of equal cells.
 *
 * When there are fewer children than columns, the grid narrows instead of stretching them, so cells
 * stay the same size as in a full row.
 *
 * @example
 * ```tsx
 * <AppGrid cols={4}>
 *   {people.map((person) => <Portrait key={person.id} person={person} />)}
 * </AppGrid>
 * ```
 */
export default function AppGrid({ cols = 3, children }: AppGridProps) {
  const items = React.Children.toArray(children);
  return (
    <div
      className={`${styles.gallery} ${styles[`cols-${cols}`] ?? ""}`}
      style={
        {
          "--max-cols": cols.toString(),
          "--content-cols": Math.min(React.Children.count(children), cols).toString(),
        } as React.CSSProperties
      }
    >
      {items.map((item, index) => (
        <div key={React.isValidElement(item) && item.key ? item.key : `grid-item-${index}`}>{item}</div>
      ))}
    </div>
  );
}
