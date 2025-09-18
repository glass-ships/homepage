import { lazy, Suspense, useMemo } from "react";
import { IconName, IconPrefix, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
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

const FallbackSvg = (props: Pick<AppIconProps, "color" | "size" | "background" | "className">) => (
  <div className={`${styles[props.size!]} ${props.background ? styles.background : ""}`}>
    <svg
      className={`${styles.appicon} ${styles[props.size!]} ${props.className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke={props.color} strokeWidth="2" />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="16" fill={props.color}>
        ?
      </text>
    </svg>
  </div>
);

function getCustomIcon(iconName: string) {
  let suffix = `/${iconName}.svg`;
  let name = Object.keys(iconModules).find((k) => k.endsWith(suffix));
  if (!name) return null;
  return lazy(() => import(`@/assets/icons/${iconName}.svg?react`));
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
    () => [
      styles.appicon,
      styles[size],
      className
    ].filter(Boolean).join(" "),
    [size, className]
  );

  // Check if icon is FontAwesome first
  const faIcon = getFontAwesomeIcon(icon);
  if (faIcon) {
    return (
    <div className={`${styles[size]} ${background ? styles.background : ""}`}>
      <FaIcon 
      icon={faIcon}
      color={color}
      className={computedClassName}
      />
      </div>
  )}

  // if file exists in @/assets/icons
  const SvgComponent = getCustomIcon(icon);
  console.log({ SvgComponent });

  if (!SvgComponent) {
    console.log("No svg component found, falling back to `?`");
    return <FallbackSvg size={size} color={color} className={className} background={background} />;
  } else {
    return (
      <Suspense fallback={<FallbackSvg size={size} color={color} className={className} background={background} />}>
        <div className={`${styles[size]} ${background ? styles.background : ""}`}>
        <SvgComponent
          className={computedClassName}
          style={{ color: color }}
          width="100%"
          height="100%"
          />
        </div>
      </Suspense>
    );
  }
}
