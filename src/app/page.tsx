import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import Header from '@/pages/Header';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import bg from '@/assets/images/header-bg.png';
import Image from 'next/image';


export default function Home() {
  return (
<main 
  className="flex min-h-screen flex-col items-center justify-between p-18 bg-scroll"
  style={{
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>

  {Navbar()}
  {Header()}
  {About()}
  {Skills()}
  {Projects()}
  {Contact()}
  {/* {Footer()} */}

</main>
)};
