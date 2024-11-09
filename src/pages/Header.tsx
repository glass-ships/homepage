import Image from "next/image";
import logo from "@/assets/images/logo-512.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image id={styles.logo} src={logo} alt="Logo" width={512} height={512} priority />
      <h2>Glass Ships</h2>
      <h3>Enabling science through software</h3>
    </div>
  );
}
