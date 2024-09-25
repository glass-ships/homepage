"use client";

import Navbar from "@/components/Navbar";
import Header from "@/pages/Header";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";
import "@/global/styles.scss";

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
