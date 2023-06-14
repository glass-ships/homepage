import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubAlt, } from '@fortawesome/free-brands-svg-icons';


export default function Footbar() {
  return (
<nav 
  className="
    absolute bottom-0 flex flex-col items-center justify-evenly
    w-full h-32
    transition-all duration-300 ease-in-out transform translate-y-0
">

  {/* list of icon social links */}
  <ul className="flex flex-row items-center gap-8 font-mono text-sm lg:gap-4 lg:text-base lg:font-thin">
    {
      [
        {
          icon: faGithubAlt,
          link: 'https://github.com/glass-ships',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/in/glass-ships',
        },
        {
          icon: faEnvelope,
          link: 'mailto:contact@glass-ships.com',
        },
      ].map((item, index) => (
        <li key={index} className="hidden lg:block px-4">
          <a
            className="font-thin text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-yellow-300"
            href={item.link}
            target='_blank'
          >
            <Icon 
              icon={item.icon}
              className="transition-all duration-300 ease-in-out transform hover:scale-110"
              size="2xl"
            />
          </a>
        </li>
      ))
    }
  </ul>

    <p className="flex items-center gap-2 p-12 lg:p-0 scroll-smooth text-sm lg:text-base">
      Created with love by{' '}
      <a
        className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
        href="https://github.com/glass-ships"
        target="_blank"
        rel="noopener noreferrer"
      >
        Glass Ships &copy; {new Date().getFullYear()}
      </a>
    </p>

</nav>
  )};  
  