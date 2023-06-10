import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/pages/Header';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import bg from '@/assets/images/header-bg.png';
import Image from 'next/image';
// import Link from 'next/link';

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-18 scroll-smooth">

  {/** Background */}
  <div className="absolute inset-0 z-[-10]">
    <Image
      className="object-cover object-center w-full h-full"
      src={bg}
      alt="Background"
      fill="true"
      priority
    />
  </div>
  
  {Navbar()}
  {Header()}
  {About()}
  {Skills()}
  {Projects()}
  {Contact()}
  {/* {Footer()} */}

</main>
)};
