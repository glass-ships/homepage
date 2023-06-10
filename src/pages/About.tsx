
// Fullscreen page with a title and a paragraph of text.
export default function About() {
  return (
<div
    id="about"
    className="
        flex flex-col items-center justify-center gap-8
        min-h-screen w-7/12 px-8 py-16 text-center 
        bg-gradient-to-b from-white via-white dark:from-black/80 dark:via-black/50 backdrop-blur-2xl dark:bg-zinc-800/10
        snap-y snap-mandatory
    "
>
    <div className="flex flex-col items-center justify-center gap-8 snap-center">
        <h1 className="text-7xl font-thin text-gray-800 dark:text-gray-200">
            About
        </h1>

        <p className="text-2xl font-mono text-gray-600 dark:text-gray-400">
        Hi, I'm Glass - a scientific software engineer and data scientist <br/>
        with a Bachelor in Physics from University of Colorado Denver. <br/> <br/>
        Currently, I'm a collaborator with the <a href="http://berkeleybop.github.io/project/monarch/">Monarch Initiative</a><br/>
        where I maintain the software used in data processing and database management. <br/> <br/>
        When I'm not at work, I enjoy making music, developing and contributing to open-source projects, <br/>
        and lounging with my cat.
        </p>
    </div>
</div>
  )
};