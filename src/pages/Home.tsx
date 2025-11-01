import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToTopButton from "@/components/ui/AppBackToTopButton";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import "@/global/styles.scss";

const Nexus = React.lazy(() => import("@/components/Nexus"));

export default function Home() {
  return (
    <main>
      <BackToTopButton />
      <Nexus />

      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
