// Generic button component that either does something (<button>) or goes somewhere (<a>)

/** 
 * TODO: add copy
 * TODO: add tooltip 
 */
import React from "react";
import styles from "./AppButton.module.scss";
import AppIcon, { AppIconProps } from "./AppIcon";
// import { copyToClipboard } from "@/utils/string";

export interface AppButtonProps {
  id?: string;
  color?: "primary" | "secondary" | "tertiary" | "none";
  design?: "normal" | "circle" | "small";
  type?: "button" | "link" | "submit";
  text?: string;
  icon?: string;
  iconColor?: string;
  iconPosition?: "left" | "right";
  linkTo?: string;
  newTab?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | null) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export default function AppButton({
  id = "",
  color = "primary",
  design = "normal",
  type = "button",
  text = "",
  icon = "",
  iconColor,
  iconPosition = "right",
  linkTo = "",
  newTab = false,
  onClick = undefined,
  onKeyDown = undefined,
}: AppButtonProps) {
  const defaultIconColor = color === "none" ? "#facc15" : "black";
  const buttonClass = `${styles.button} ${styles[color]} ${styles[design]} ${text ? styles.text : ""}`;
  const iconArgs: AppIconProps = {
    icon,
    color: iconColor || defaultIconColor,
    size: text ? "tiny" : "small",
  };
  if (type === "link" || linkTo !== "") {
    return (
      <a id={id} href={linkTo} target={newTab ? "_blank" : "_self"} className={buttonClass}>
        {icon && iconPosition === "left" && <AppIcon {...iconArgs} />}
        {text && text}
        {icon && iconPosition === "right" && <AppIcon {...iconArgs} />}
      </a>
    );
  } else if (type === "button") {
    return (
      <button id={id} onClick={onClick} onKeyDown={onKeyDown} className={buttonClass}>
        {icon && iconPosition === "left" && <AppIcon {...iconArgs} />}
        {text && <span className={styles.text}>{text}</span>}
        {icon && iconPosition === "right" && <AppIcon {...iconArgs} />}
      </button>
    );
  } else if (type === "submit") {
    return (
      <button id={id} type="submit" className={buttonClass}>
        {icon && iconPosition === "left" && <AppIcon {...iconArgs} />}
        {text && <span className={styles.text}>{text}</span>}
        {icon && iconPosition === "right" && <AppIcon {...iconArgs} />}
      </button>
    );
  }
}
