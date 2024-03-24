import Image from "next/image";
import logo from "@/assets/images/logo-512.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      {/* <div
      // full height
      className="
    flex flex-col items-center justify-center
    w-full min-h-screen
  "
    > */}
      <Image 
        id={styles.logo} 
        className="relative drop-shadow-[0_0_0.3rem_#ffffff70] w-auto sm:w-52 md:w-80 lg:w-auto h:auto" 
        src={logo} 
        alt="Logo" 
        width={512} 
        height={512} 
        priority 
      />

      <h1 className="font-thin text-8xl text-center text-gray-100 pb-4">Glass Ships</h1>

      <h2 className="font-thin text-5xl text-center text-gray-100 pb-16">Enabling science through software</h2>
    </div>
  );
}
