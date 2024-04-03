// Generic section component for the app.
// Spans width of the page and contains, aligns, and evenly vertically spaces its children.
// All content should be wrapped in this component.

import React from "react";
import styles from "./AppSection.module.scss";

// Props and Types for the AppSection component
export type AppSectionWidth = "full" | "medium" | "big";
export type AppSectionHeight = "full" | "auto";
export type AppSectionDesign = "normal" | "fill";
export interface AppSectionProps {
  children: React.ReactNode;
  id?: string;
  width?: AppSectionWidth;
  height?: AppSectionHeight;
  design?: AppSectionDesign;
}

// AppSection component
export default function AppSection({ children, id = "", width = "full", height = "full", design = "normal" }: AppSectionProps) {
  const hStyle = height === "full" ? styles.hFull : styles.hAuto;
  return (
    <div id={id} className={`${styles.appsection} ${styles[width]} ${hStyle} ${styles[design]}`}>
      {children}
    </div>
  );
}
