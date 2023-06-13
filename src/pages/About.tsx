// Fullscreen page with a title and a paragraph of text.
export default function About() {
  return (
<div
    id="about"
    className="
        flex flex-col items-center justify-center gap-8
        min-h-screen w-7/12 px-8 py-16 text-center 
        bg-gradient-to-b from-white via-white dark:from-black/10 dark:via-black/50 dark:to-black/30 backdrop-blur-2xl
        rounded-t-3xl drop-shadow-xl shadow-black
        snap-y snap-mandatory
    "
>
    <div className="flex flex-col items-center justify-center gap-8 snap-center">
        <h1 className="text-7xl font-thin text-gray-800 dark:text-gray-200">
            About
        </h1>

        <p className="text-2xl font-mono text-gray-600 dark:text-gray-400">
        Hi, I&apos;m Glass - a scientific software engineer and data scientist <br/>
        with a Bachelor in Physics from University of Colorado Denver. <br/> <br/>
        Currently, I work with <a href="http://berkeleybop.github.io/project/monarch/" className="text-yellow-400 text-bold">Monarch Initiative</a>,<br/>
        where I maintain software infrastructure used to process,<br/>
        store, procure, and serve biomedical data. <br/> <br/>
        When I&apos;m not at work, I enjoy making music,<br/>
         developing and contributing to open-source projects, <br/>
        and lounging with my cat.
        </p>
    </div>

    {/* Button to download resume */}
    <a
        href="https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf"
        className="
            flex items-center justify-center gap-2
            px-4 py-2 text-lg font-mono text-white bg-gray-800 rounded-lg hover:bg-gray-700
        "
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5-13a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4c0-1.
                1.9 1.9 0 4.2-1.1 2.3-3.2 4.8-3.2 4.8"
            />
        </svg>
        Download my resume
    </a>
</div>
  )
};