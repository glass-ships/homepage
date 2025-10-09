import AppBackToTopButton from "@/components/AppBackToTopButton";
import Navbar from "@/components/Navbar";
import Header from "@/sections/Header";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
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
