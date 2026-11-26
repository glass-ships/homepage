import { findIconDefinition, type IconName, type IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { type ComponentType, type LazyExoticComponent, lazy, Suspense } from "react";

type SvgComponent = ComponentType<React.SVGProps<SVGSVGElement>>;

import styles from "./AppIcon.module.scss";

export type AppIconProps = {
  id?: string;
  /** A FontAwesome icon registered in `src/global/icons.ts`, or the file name (without `.svg`) of an icon in `src/assets/icons/`. */
  icon: string;
  /** 1, 1.5, 2 or 3em square. Defaults to `"small"`. */
  size?: "tiny" | "small" | "medium" | "large";
  /** Any CSS color. Defaults to the text color (`$text`). */
  color?: string;
  className?: string;
  /** Puts the icon on a padded background. */
  background?: boolean;
};

const iconModules = import.meta.glob<{ default: SvgComponent }>("/src/assets/icons/*");
const lazyIconCache = new Map<string, LazyExoticComponent<SvgComponent>>();

const FallbackSvg = (props: Omit<AppIconProps, "icon">) => {
  const size = props.size || "small";
  return (
    <div id={props.id} className={`${styles[size]} ${props.background ? styles.background : ""}`}>
      <svg className={`${styles.appicon} ${styles[size]} ${props.className}`} viewBox="0 0 24 24" fill="none">
        <title>Unknown Icon</title>
        <circle cx="12" cy="12" r="10" stroke={props.color || "currentColor"} strokeWidth="2" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="16"
          fill={props.color || "currentColor"}
        >
          ?
        </text>
      </svg>
    </div>
  );
};

function getCustomIcon(props: AppIconProps) {
  const { id, icon, size, color, className, background } = props;
  const suffix = `/${icon}.svg`;
  const name = Object.keys(iconModules).find((k) => k.endsWith(suffix));
  if (!name) return <FallbackSvg size={size} color={color} className={className} background={background} />;
  let SvgIcon = lazyIconCache.get(name);
  if (!SvgIcon) {
    SvgIcon = lazy(iconModules[name]);
    lazyIconCache.set(name, SvgIcon);
  }

  return (
    <Suspense fallback={<FallbackSvg size={size} color={color} className={className} background={background} />}>
      <div className={`${styles[size || "small"]} ${background ? styles.background : ""}`}>
        <SvgIcon id={id} className={className} style={{ color: color }} width="100%" height="100%" />
      </div>
    </Suspense>
  );
}

function getFontAwesomeIcon(iconName: string) {
  for (const prefix of ["fas", "far", "fab"]) {
    const match = findIconDefinition({
      prefix: prefix as IconPrefix,
      iconName: iconName as IconName,
    });
    if (match) return match;
  }
  return null;
}

/**
 * An icon, by name. FontAwesome icons are looked up first, then custom SVGs in `src/assets/icons/`,
 * which load on first use. An unknown name shows a "?" placeholder.
 *
 * @example
 * ```tsx
 * <AppIcon icon="github" />
 * <AppIcon icon="logo" size="large" background />
 * ```
 */
export default function AppIcon({
  id,
  icon = "",
  size = "small",
  color,
  className = "",
  background = false,
}: AppIconProps) {
  const computedClassName = [styles.appicon, styles[size], !color && styles.defaultColor, className]
    .filter(Boolean)
    .join(" ");

  // Check if icon is FontAwesome first
  const faIcon = getFontAwesomeIcon(icon);
  if (faIcon) {
    return (
      <div id={id} className={`${styles[size]} ${background ? styles.background : ""}`}>
        <FaIcon icon={faIcon} color={color} className={computedClassName} />
      </div>
    );
  }

  return getCustomIcon({
    id: id,
    icon: icon,
    size: size,
    color: color,
    className: computedClassName,
    background: background,
  });
}
