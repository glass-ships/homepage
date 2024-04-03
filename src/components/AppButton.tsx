// Generic button component that either does something (<button>) or goes somewhere (<a>)

import React from "react";
import styles from "./AppButton.module.scss";
import AppIcon from "./AppIcon";

// Props and Types for the AppButton component
export type ButtonColors = "primary" | "secondary" | "tertiary" | "none";
export type ButtonDesigns = "normal" | "circle" | "small";
export type ButtonType = "button" | "link" | "submit";
export interface AppButtonProps {
  text?: string;
  linkTo?: string;
  type?: ButtonType;
  icon?: string;
  iconColor?: string;
  color?: ButtonColors;
  design?: ButtonDesigns;
  onClick?: () => void;
}

// AppButton component
export default function AppButton({ text = "", linkTo = "", type = "button", icon = "", color = "primary", design = "normal", onClick = undefined }: AppButtonProps) {
  const iconColor = color === "none" ? "#facc15" : "black";
  if (type === "link" || linkTo !== "") {
    return (
      <a href={linkTo} target="_blank" className={`${styles.button} ${styles[color]} ${styles[design]} ${text !== "" ? styles.text : ""}`}>
        {icon && <AppIcon icon={icon} color={iconColor} size="tiny" />}
        {text && text}
      </a>
    );
  } else if (type === "button") {
    return (
      <button onClick={onClick} className={`${styles.button} ${styles[color]} ${styles[design]} ${text !== "" ? styles.text : ""}`}>
        {icon && <AppIcon icon={icon} color={iconColor} size="tiny" />}
        {text && <span className={styles.text}>{text}</span>}
      </button>
    );
  } else if (type === "submit") {
    return (
      <button type="submit" className={`${styles.button} ${styles[color]} ${styles[design]} ${text !== "" ? styles.text : ""}`}>
        {icon && <AppIcon icon={icon} color={iconColor} size="tiny" />}
        {text && <span className={styles.text}>{text}</span>}
      </button>
    );
  }
}
