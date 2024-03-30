// Generic section component for the app.
// Spans width of the page and contains, aligns, and evenly vertically spaces its children.
// All content should be wrapped in this component.

import React from "react";

// Props and Types for the AppSection component
export type AppSectionWidth = "full" | "medium" | "big";
export type AppSectionDesign = "normal" | "fill";
export interface AppSectionProps {
  children: React.ReactNode;
  id?: string;
  width?: AppSectionWidth;
  design?: AppSectionDesign;
}

// AppSection component
export default function AppSection({ children, id = "", width = "full", design = "normal" }: AppSectionProps) {
  return (
    <div id={id} className={`appsection ${width} ${design}`}>
      {children}
    </div>
  );
}
