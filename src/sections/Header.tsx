import logo from "@/assets/images/logo-glass.png";
import AppSection from "@/components/ui/AppSection";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <AppSection width="big" height="full">
      <div className={styles.header}>
        <img id={styles.logo} src={logo} alt="Logo" width={512} height={512} />
        <div className={styles.text}>
          <h2>Glass Ships</h2>
          <h3>Enabling science through software</h3>
        </div>
      </div>
    </AppSection>
  );
}
