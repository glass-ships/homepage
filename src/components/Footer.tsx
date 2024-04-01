import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import AppFlex from "./AppFlex";
import AppIcon from "./AppIcon";
import styles from "@/styles/Footer.module.scss";

export default function Footbar() {
  return (
    <footer className={styles.footer}>
      {/* list of icon social links */}
      {/* <div className={styles.social}> */}
      <AppFlex flow="inline" alignH="stretch"> 
        {[
          {
            icon: "github-alt",
            link: "https://github.com/glass-ships",
          },
          {
            icon: "linkedin",
            link: "https://www.linkedin.com/in/glass-ships",
          },
          {
            icon: "envelope",
            link: "mailto:contact@glass-ships.com",
          },
        ].map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <AppIcon icon={item.icon} size="2xl" color="#facc15" />
          </a>
        ))}
      </AppFlex>
      <p className={styles.license}>
        Created with love by{" "}
        <a href="https://github.com/glass-ships" target="_blank" rel="noopener noreferrer">
          Glass Ships &copy; {new Date().getFullYear()}
        </a>
      </p>
    </footer>
  );
}
