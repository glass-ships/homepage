import AppBackToTopButton from "@/components/AppBackToTopButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import "@/global/styles.scss";
import Nexus from "@/components/Nexus";

export default function Home() {
  return (
    <main>
      <AppBackToTopButton />
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
