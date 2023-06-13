import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/pages/Header';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';


export default function Home() {
  return (
<main 
  className="flex min-h-screen flex-col items-center justify-between p-18 bg-scroll selection:bg-indigo-800/50 selection:text-indigo-100"
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
  {Footer()}

</main>
)};
