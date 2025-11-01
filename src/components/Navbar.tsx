import Logo from "@/assets/images/logo.svg";
import AppFlex from "@/components/ui/AppFlex";
import AppIcon from "@/components/ui/AppIcon";
import { useIsThin } from "@/hooks/useIsThin";
import styles from "./Navbar.module.scss";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
  const isThin = useIsThin();

  return (
    <nav className={styles.navbar}>
      {isThin ? (
        <div>
          <button
            type="button"
            id="navbar-button"
            popoverTarget="navbar-popover"
            className={styles.dropdownbutton}
            aria-label="navbar menu"
          >
            <AppIcon icon="bars" size="medium" color="#fff" />
          </button>
          <div id="navbar-popover" popover="auto" className={styles.popover}>
            <div className={styles.menu}>
              <a href="/#" rel="noopener noreferrer" className={styles.menuitem}>
                Home
              </a>
              {links.map((link) => (
                <a key={`navbar-link-${link.label}`} href={link.href} className={styles.menuitem}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <AppFlex alignH="right" flow="inline">
          <a href="/#" rel="noopener noreferrer">
            <img src={Logo} alt="Logo" className={styles.logo} />
          </a>
          {links.map((link) => (
            <a key={`navbar-link-${link.label}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </AppFlex>
      )}
      <ThemeToggle />
    </nav>
  );
}

const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
