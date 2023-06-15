import logosvg from '@/assets/images/logo.svg';
import Image from 'next/image';


export default function Navbar() {
  return (
<nav 
  className="
    sticky top-0 z-50 flex items-center justify-between 
    w-full px-4 py-2 
    transition-all duration-300 ease-in-out
   bg-gradient-to-b from-black/10 via-black/50 to-black/30 backdrop-blur-2xl
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
      className="fill-yellow-400 transition-transform duration-300 ease-in-out transform-gpu hover:scale-110"
      style={{ 
        filter: 'drop-shadow(0 0 0.75rem #000)',
        // fill: '#fff',
        fill: '#fcd34d',
        transition: 'fill 0.25s ease-in-out',
        // transition-timing-function: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      width={100}
      height={100}
      priority
    />
  </a>

  <ul className="flex items-center gap-8 font-mono text-sm lg:gap-4 lg:text-base lg:font-thin">
    {
      [
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Skills',
          href: '#skills'
        },
        {
          label: 'Projects',
          href: '#projects'
        },
        {
          label: 'Resume',
          href: 'https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf'
        },
        {
          label: 'Contact',
          href: '#contact'
        }
      ].map((link, index) => (
        <li key={index} className="px-8">
          <a
            className="font-thin text-2xl text-gray-400 hover:text-yellow-300"
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))
    }
  </ul>
</nav>
  )};  