import { Tooltip } from "react-tooltip";
import AppFlex from "@/components/ui/AppFlex";
import AppIcon from "@/components/ui/AppIcon";
import styles from "./Footer.module.scss";

export default function Footbar() {
  return (
    <footer className={styles.footer}>
      <AppFlex flow="inline" alignH="stretch" className={styles.socials}>
        {socials.map((item, _index) => (
          <div key={item.label} className={styles["social-item"]}>
            <a id={`social-link-${item.label}`} href={item.link} target="_blank">
              <AppIcon icon={item.icon} size="small" color="#facc15" />
            </a>
            <Tooltip anchorSelect={`#social-link-${item.label}`} content={item.label} clickable />
          </div>
        ))}
      </AppFlex>

      <div>
        <p className={styles.license}>
          Created with love by{" "}
          <a href="https://github.com/glass-ships" target="_blank" rel="noopener noreferrer">
            Glass Ships &copy; {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  );
}

const socials = [
  {
    icon: "github",
    label: "GitHub",
    link: "https://github.com/glass-ships",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/glass-ships",
  },
  {
    icon: "envelope",
    label: "Email",
    link: "mailto:contact@glass-ships.com",
  },
];
