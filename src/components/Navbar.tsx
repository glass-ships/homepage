// "use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// import AppIcon from "@/components/AppIcon";
import AppFlex from "@/components/AppFlex";
import Logo from "@/assets/images/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        return document.body.scrollTop > 0;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <a href="#" rel="noopener noreferrer">
        <Image src={Logo} alt="Logo" className={styles.logo} />
      </a>

      <AppFlex alignH="right" flow="inline">
        {[
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
            label: "Resume",
            href: "https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf",
          },
          {
            label: "Contact",
            href: "#contact",
          },
        ].map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
          // <li  key={index} className={`${styles.border}`}>
          // </li>
        ))}
      </AppFlex>

      {/* <div // className={styles.dropdownsection}
      >
        <MenuTrigger>
          <Button aria-label="Menu" className={styles.dropdownbutton}>
            <Icon icon={faBars} width={100} height={75} className={styles.dropdownicon} />
            <AppIcon
              icon="bars"
              size="5x"
              color="#facc15"
              // width={100}
              // height={75}
              // className={styles.dropdownicon}
            />
          </Button>
          <Popover className="p-1 w-56 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards origin-top-left">
            <Menu className="outline-none">
              <ActionItem id="new">New…</ActionItem>
              <ActionItem id="open">Open…</ActionItem>
              <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
              <ActionItem id="save">Save</ActionItem>
              <ActionItem id="save-as">Save as…</ActionItem>
              <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
              <ActionItem id="print">Print…</ActionItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </div> */}
    </nav>
  );
}

// function ActionItem(props: MenuItemProps) {
//   return <MenuItem {...props} className="group flex w-full items-center rounded-md px-3 py-2 box-border outline-none cursor-default text-gray-900 focus:bg-violet-500 focus:text-white" />;
// }
