import type React from "react";
import styles from "./AppSection.module.scss";

/** `"full"` is the page width, `"big"` at most 1400px (`$section-big`), `"medium"` at most 900px (`$section`). */
export type AppSectionWidth = "full" | "medium" | "big";
/** `"full"` is at least the window height, with its content centered vertically; `"auto"` fits its content. */
export type AppSectionHeight = "full" | "auto";
export interface AppSectionProps {
  children: React.ReactNode;
  id?: string;
  /** Defaults to `"full"`. */
  width?: AppSectionWidth;
  /** Defaults to `"full"`. */
  height?: AppSectionHeight;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
}

/**
 * A band across the page that centers its children in a column and spaces them evenly. Wrap each
 * part of a page's content in one. The last section on a page grows to fill the remaining height.
 *
 * @example
 * ```tsx
 * <main>
 *   <AppSection width="medium" height="auto">
 *     <AppCard>...</AppCard>
 *   </AppSection>
 * </main>
 * ```
 */
export default function AppSection({ children, id, width = "full", height = "full", onScroll }: AppSectionProps) {
  const hStyle = height === "full" ? styles.hFull : styles.hAuto;
  return (
    <div
      id={id}
      className={`${styles.appsection} ${styles[width]} ${hStyle}`}
      onScroll={onScroll ? onScroll : undefined}
    >
      {children}
    </div>
  );
}
