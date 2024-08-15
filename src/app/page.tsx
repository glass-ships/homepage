"use client";

// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import Header from "@/pages/Header";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";
import "@/global/styles.scss";
// import AppTestIframe from "@/components/AppTestIframe";

export default function Home() {
  return (
    <main>
      {/* <AppTestIframe /> */}
      {Navbar()}
      {Header()}
      {About()}
      {Skills()}
      {Projects()}
      {Contact()}
      {Footer()}
    </main>
  );
}
