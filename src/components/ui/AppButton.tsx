// TODO: add copy
// TODO: add tooltip
import type React from "react";
import { useContext } from "react";
import styles from "./AppButton.module.scss";
import AppIcon, { type AppIconProps } from "./AppIcon";
import { LinkContext } from "./LinkContext";

// import { copyToClipboard } from "@/utils/string";

export interface AppButtonBaseProps {
  id?: string;
  /** Background color from the theme; `"none"` uses the page background. Defaults to `"primary"`. */
  color?: "primary" | "secondary" | "tertiary" | "none";
  /** `"normal"` is a rounded rectangle, `"circle"` is fully rounded, `"small"` is compact. Defaults to `"normal"`. */
  design?: "normal" | "circle" | "small";
  /** `"submit"` submits the button's form. `"link"` renders a link, as does setting `linkTo`. Defaults to `"button"`. */
  type?: "button" | "link" | "submit";
  /** Name of an icon to show next to the text, as for {@link AppIcon}. */
  icon?: string;
  /** Defaults to the text color. */
  iconColor?: string;
  /** Defaults to `"right"`. */
  iconPosition?: "left" | "right";
  /** Makes the button a link to this href. See {@link AppButton} for how links are rendered. */
  linkTo?: string;
  /** Opens the link in a new tab. */
  newTab?: boolean;
  /** Not called for links. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | null) => void;
  /** Not called for links. */
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * Needs visible `text`, an `ariaLabel`, or both, so the button always has an accessible name.
 * An `ariaLabel` replaces `text` as the accessible name; if you pass both, include the text in the label.
 */
export type AppButtonProps = AppButtonBaseProps &
  ({ text: string; ariaLabel?: string } | { text?: string; ariaLabel: string });

/**
 * A button that either does something (a `<button>`) or goes somewhere (a link, when `linkTo` is set).
 *
 * Links are rendered with the element from {@link LinkContext}: a plain `<a>` by default, or
 * {@link components/RouterLink! | RouterLink} in this app (see `main.tsx`), so internal links navigate without a page reload.
 *
 * @example
 * ```tsx
 * <AppButton text="Save" onClick={save} />
 * <AppButton text="Docs" icon="arrow-up-right-from-square" linkTo="https://example.com" newTab />
 * <AppButton icon="bars" ariaLabel="Menu" design="circle" onClick={toggleMenu} />
 * ```
 */
export default function AppButton({
  id,
  color = "primary",
  design = "normal",
  type = "button",
  text = "",
  ariaLabel,
  icon = "",
  iconColor,
  iconPosition = "right",
  linkTo = "",
  newTab = false,
  onClick = undefined,
  onKeyDown = undefined,
}: AppButtonProps) {
  const Anchor = useContext(LinkContext);
  const buttonClass = `${styles.button} ${styles[color]} ${styles[design]} ${text ? styles.text : ""}`;
  const iconArgs: AppIconProps = {
    icon,
    color: iconColor ?? "currentColor", // match the button text in both themes
    size: text ? "tiny" : "small",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <AppIcon {...iconArgs} />}
      {text && <span className={styles.text}>{text}</span>}
      {icon && iconPosition === "right" && <AppIcon {...iconArgs} />}
    </>
  );

  if (type === "link" || linkTo !== "") {
    return (
      <Anchor id={id} href={linkTo} target={newTab ? "_blank" : "_self"} aria-label={ariaLabel} className={buttonClass}>
        {content}
      </Anchor>
    );
  }
  return (
    <button id={id} type={type} onClick={onClick} onKeyDown={onKeyDown} aria-label={ariaLabel} className={buttonClass}>
      {content}
    </button>
  );
}
