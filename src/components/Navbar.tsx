// import { useEffect, useState } from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import AppIcon from "@/components/AppIcon";
import AppFlex from "@/components/AppFlex";
import Logo from "@/assets/images/logo.svg";
import styles from "./Navbar.module.scss";
import { useIsThin } from "@/hooks/useIsThin";

export default function Navbar() {
  const isThin = useIsThin();

  return (
    <nav className={styles.navbar}>
      <a href="#" rel="noopener noreferrer">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </a>

      {isThin ?
        <MenuTrigger>
          <Button aria-label="Menu" className={styles.dropdownbutton}>
            <AppIcon icon="bars" size="medium" color="#fff" />
          </Button>
          <Popover className={styles.popover}>
            <Menu className={styles.menu}>
              {links.map((link, index) => (
                <MenuItem key={index} href={link.href} className={styles.menuitem}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Popover>
        </MenuTrigger>
      : <AppFlex alignH="right" flow="inline">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </AppFlex>
      }
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
