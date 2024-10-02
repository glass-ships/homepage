// Generic button component that either does something (<button>) or goes somewhere (<a>)

import React from "react";
import styles from "./AppButton.module.scss";
import AppIcon, { AppIconProps } from "./AppIcon";

// Props and Types for the AppButton component
export type ButtonColors = "primary" | "secondary" | "tertiary" | "none";
export type ButtonDesigns = "normal" | "circle" | "small";
export type ButtonType = "button" | "link" | "submit";
export interface AppButtonProps {
  class?: string;
  color?: ButtonColors;
  design?: ButtonDesigns;
  icon?: string;
  iconColor?: string;
  linkTo?: string;
  text?: string;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// AppButton component
export default function AppButton({
  class: string = "",
  color = "primary",
  design = "normal",
  icon = "",
  linkTo = "",
  text = "",
  type = "button",
  onClick = undefined,
}: AppButtonProps) {
  const iconColor = color === "none" ? "#facc15" : "black";
  const buttonClass = `${styles.button} ${styles[color]} ${styles[design]} ${text ? styles.text : ""}`;
  const iconArgs: AppIconProps = { icon, color: iconColor, size: text ? "tiny" : "small" };
  if (type === "link" || linkTo !== "") {
    return (
      <a href={linkTo} target="_blank" className={buttonClass}>
        {icon && <AppIcon {...iconArgs} />}
        {text && text}
      </a>
    );
  } else if (type === "button") {
    return (
      <button onClick={onClick} className={buttonClass}>
        {icon && <AppIcon {...iconArgs} />}
        {text && <span className={styles.text}>{text}</span>}
      </button>
    );
  } else if (type === "submit") {
    return (
      <button type="submit" className={buttonClass}>
        {icon && <AppIcon {...iconArgs} />}
        {text && <span className={styles.text}>{text}</span>}
      </button>
    );
  }
}
