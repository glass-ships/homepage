// import { useEffect, useState } from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import Logo from "@/assets/images/logo.svg";
import AppFlex from "@/components/AppFlex";
import AppIcon from "@/components/AppIcon";
import { useIsThin } from "@/hooks/useIsThin";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const isThin = useIsThin();

  return (
    <nav className={styles.navbar}>
      <a href="/#" rel="noopener noreferrer">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </a>

      {isThin ? (
        <MenuTrigger>
          <Button aria-label="Menu" className={styles.dropdownbutton}>
            <AppIcon icon="bars" size="medium" color="#fff" />
          </Button>
          <Popover className={styles.popover}>
            <Menu className={styles.menu}>
              {links.map((link) => (
                <MenuItem key={`navbar-link-${link.label}`} href={link.href} className={styles.menuitem}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Popover>
        </MenuTrigger>
      ) : (
        <AppFlex alignH="right" flow="inline">
          {links.map((link) => (
            <a key={`navbar-link-${link.label}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </AppFlex>
      )}
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
