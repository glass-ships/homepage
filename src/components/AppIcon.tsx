import { findIconDefinition, type IconName, type IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { lazy, Suspense, useMemo } from "react";

import styles from "./AppIcon.module.scss";

export type AppIconProps = {
  icon: string;
  size?: "tiny" | "small" | "medium" | "large";
  color?: string;
  className?: string;
  background?: boolean;
};

// const sizePx: Record<NonNullable<AppIconProps["size"]>, number> = {
//   tiny: 16, small: 24, medium: 36, large: 52
// }

const iconModules = import.meta.glob<{ default: React.ComponentType }>("/src/assets/icons/*");

const FallbackSvg = (props: Pick<AppIconProps, "color" | "size" | "background" | "className">) => {
  const size = props.size || "small";
  return (
    <div className={`${styles[size]} ${props.background ? styles.background : ""}`}>
      <svg className={`${styles.appicon} ${styles[size]} ${props.className}`} viewBox="0 0 24 24" fill="none">
        <title>Unknown Icon</title>
        <circle cx="12" cy="12" r="10" stroke={props.color} strokeWidth="2" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="16" fill={props.color}>
          ?
        </text>
      </svg>
    </div>
  );
};

function getCustomIcon(props: AppIconProps) {
  const { icon, size, color, className, background } = props;
  const suffix = `/${icon}.svg`;
  const name = Object.keys(iconModules).find((k) => k.endsWith(suffix));
  if (!name) return <FallbackSvg size={size} color={color} className={className} background={background} />;
  const SvgComponent = lazy(() => import(`@/assets/icons/${icon}.svg?react`));

  return (
    <Suspense fallback={<FallbackSvg size={size} color={color} className={className} background={background} />}>
      <div className={`${styles[size]} ${background ? styles.background : ""}`}>
        <SvgComponent className={className} style={{ color: color }} width="100%" height="100%" />
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

export default function AppIcon({
  icon = "",
  size = "small",
  color = "yellow",
  className = "",
  background = false,
}: AppIconProps) {
  const computedClassName = useMemo(
    () => [styles.appicon, styles[size], className].filter(Boolean).join(" "),
    [size, className],
  );

  // Check if icon is FontAwesome first
  const faIcon = getFontAwesomeIcon(icon);
  if (faIcon) {
    return (
      <div className={`${styles[size]} ${background ? styles.background : ""}`}>
        <FaIcon icon={faIcon} color={color} className={computedClassName} />
      </div>
    );
  }

  return getCustomIcon({ icon: icon, size: size, color: color, className: computedClassName, background: background });
}
