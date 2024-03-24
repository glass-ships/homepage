import { IconName, IconPrefix, SizeProp, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "@/global/icons";

function getFontAwesomeIcon(iconName: string) {
  for (const prefix of ["fas", "far", "fab"]) {
    //   for (const prefix of ["fa-solid", "fa-regular", "fa-brands"]) {
    const match = findIconDefinition({ prefix: prefix as IconPrefix, iconName: iconName as IconName });
    if (match) return match;
  }
  return null;
}

export default function AppIcon({ icon = "", size = "1x", color = "yellow", className = "" }) {
  const iconDef = getFontAwesomeIcon(icon);
  if (!iconDef) return null;
  return <Icon icon={iconDef} size={size as SizeProp} color={color} className={className} />;
}
