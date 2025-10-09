import logo from "@/assets/images/logo-glass.png";
import styles from "./Header.module.scss";
import AppSection from "@/components/AppSection";

export default function Header() {
  return (
    <div className={styles.header}>
      <img id={styles.logo} src={logo} alt="Logo" width={512} height={512} />
      <h2>Glass Ships</h2>
      <h3>Enabling science through software</h3>
    </div>
    // <AppSection width="big" height="full" design="normal">
    //     <img id={styles.logo} src={logo} alt="Logo" width={512} height={512} />
    //     <h2>Glass Ships</h2>
    //     <h3>Enabling science through software</h3>
    // </AppSection>
  );
}
