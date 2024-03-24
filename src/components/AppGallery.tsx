// Generic grid/gallery component that displays a list of items in a grid

import React from "react";
import styles from "./AppGallery.module.scss";

// Props and Types for the AppGallery component
export interface AppGalleryProps {
  cols?: number;
  children?: React.ReactNode;
}

// AppGallery component
export default function AppGallery({ cols = 3, children }: AppGalleryProps) {
  const items = React.Children.toArray(children);
  return (
    <div
      className={`${styles.gallery} cols-${cols}`}
      style={
        {
          "--max-cols": cols.toString(),
          "--content-cols": Math.min(React.Children.count(children), cols).toString(),
        } as React.CSSProperties
      }
    >
      {/* <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}> */}
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {item}
        </div>
      ))}
      {/* {items} */}
      {/* </div> */}
    </div>
  );
}
