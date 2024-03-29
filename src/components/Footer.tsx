import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import AppFlex from "./AppFlex";
import AppIcon from "./AppIcon";
import styles from "@/styles/Footer.module.scss";

export default function Footbar() {
  return (
    <footer
      className={`${styles.footer}
    absolute bottom-0 flex flex-col items-center justify-evenly
    w-full h-32
    transition-all duration-300 ease-in-out transform translate-y-0
  `}
    >
      {/* <div></div> */}
      {/* list of icon social links */}
      <div className={styles.social}>
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
      </div>
        <p className={styles.license}>
          Created with love by{" "}
          <a className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0" href="https://github.com/glass-ships" target="_blank" rel="noopener noreferrer">
            Glass Ships &copy; {new Date().getFullYear()}
          </a>
        </p>
    </footer>
  );
}
