// Generic section component for the app.
// Spans width of the page and contains, aligns, and evenly vertically spaces its children.
// All content should be wrapped in this component.

import type React from "react";
import styles from "./AppSection.module.scss";

// Props and Types for the AppSection component
export type AppSectionWidth = "full" | "medium" | "big";
export type AppSectionHeight = "full" | "auto";
export interface AppSectionProps {
  children: React.ReactNode;
  id?: string;
  width?: AppSectionWidth;
  height?: AppSectionHeight;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
}

// AppSection component
export default function AppSection({ children, id = "", width = "full", height = "full", onScroll }: AppSectionProps) {
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
