import logosvg from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link'


export default function Navbar() {
  return (
<nav 
  className="
    sticky top-0 z-50 flex items-center justify-between 
    w-full px-4 py-2 
    transition-all duration-300 ease-in-out
    bg-gradient-to-b from-white via-white dark:from-black/70 dark:via-black/40 backdrop-blur-2xl dark:bg-zinc-800/10 
">
  {/* logo */}
  <a
  className="flex items-center gap-2 p-8 lg:p-0 scroll-smooth"
  href="#"
  rel="noopener noreferrer"
  >
    <Image
      src={logosvg}
      alt="Logo"
      className="dark:invert transition-transform duration-300 ease-in-out transform-gpu hover:scale-110"
      width={100}
      height={100}
      priority
    />
  </a>

  {/* links (glow when hover) */}
  <ul className="flex items-center gap-8 font-mono text-sm lg:gap-4 lg:text-base lg:font-thin">
    <li className="hidden lg:block px-8 ">
      <a
        className="font-thin text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-300"
        href="#about"
      >
        About
      </a>
    </li>
    <li className="hidden lg:block  px-8">
      <a
        className="font-thin text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-300"
        href="#skills"
      >
        Skills
      </a>
    </li>
    <li className="hidden lg:block  px-8">
      <a
        className="font-thin text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-300"
        href="#projects"
      >
        Projects
      </a>
    </li>
    <li className="hidden lg:block  px-8">
      <a
        className="font-thin text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-300"
        href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1VDAvz-FiFNusu4jEtMvgrgYR5IYBe686xang7q40WiE/export?format=pdf"
        target='_blank'
      >
        Resume
      </a>
    </li>
    <li className="hidden lg:block  px-8">
      <a
        className="font-bold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-500 text-2xl"
        href="#contact"
      >
        Contact
      </a>
    </li>
  </ul>      

</nav>
  )};  