import Image from 'next/image';
import logosvg from '@/assets/images/logo.svg';

export default function Footer() {
    return (
<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Get started by editing&nbsp;
      <code className="font-mono font-bold">src/app/page.tsx</code>
    </p>

    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Crafted with love by{' '}
    </div>
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://github.com/glass-ships"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={logosvg}
          alt="Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    
</div>
)};