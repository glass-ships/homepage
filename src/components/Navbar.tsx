// "use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Menu, MenuItem, MenuItemProps, MenuTrigger, Popover } from "react-aria-components";

import AppIcon from "@/components/AppIcon";
import AppFlex from "@/components/AppFlex";
import Logo from "@/assets/images/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isThin, setThin] = useState(false);
  useEffect(() => {
    setThin(window.innerWidth < 600);
    const onResize = () => {
      setThin((isThin) => {
        return window.innerWidth < 600;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <a href="#" rel="noopener noreferrer">
        <Image src={Logo} alt="Logo" className={styles.logo} />
      </a>

      {isThin ? null : (
        <AppFlex alignH="right" flow="inline">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </AppFlex>
      )}

      {!isThin ? null : (
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
  // {
  //   label: "Resume",
  //   href: "https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf",
  // },
];
