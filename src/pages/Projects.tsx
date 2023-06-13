import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch, faDisplay, faCloudArrowUp as faCloud, faTerminal, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


export default function Skills() {
    return (

// 3-column grid of skills (with icons)
<div 
    id="projects" 
    className="
        flex flex-col items-center justify-center gap-8
        min-h-screen w-7/12 px-8 py-16 text-center 
        bg-gradient-to-b from-white via-white dark:from-black/10 dark:via-black/50 dark:to-black/30 backdrop-blur-2xl
        drop-shadow-xl shadow-black
        snap-y snap-mandatory
    "
>

    <h1 className="text-7xl font-thin text-gray-800 dark:text-gray-200">
        Projects
    </h1>

    <p className="text-2xl font-thin text-gray-800 dark:text-gray-200 gap-12">
        These are some of the projects I've worked on.<br/>
        You can also see my recent activity on <a href="https://github.com/glass-ships" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-bold">GitHub</a>.
    </p>

    <div className="grid grid-cols-2 gap-8 items-center justify-center snap-center">
        { // React element wrapper
            [ // Array of projects
                {
                    title: "TBD",
                    description: "This is a project I'm working on. It's not done yet. It's going to be really cool when it's done.",
                    link: "https://glass-ships.com",
                    icon: faCode
                },
                {
                    title: "TBD",
                    description: "This is a project I'm working on. It's not done yet. It's going to be really cool when it's done.",
                    link: "https://glass-ships.com",
                    icon: faCode
                },
                {
                    title: "TBD",
                    description: "This is a project I'm working on. It's not done yet. It's going to be really cool when it's done.",
                    link: "https://glass-ships.com",
                    icon: faCode
                },
                {
                    title: "TBD",
                    description: "This is a project I'm working on. It's not done yet. It's going to be really cool when it's done.",
                    link: "https://glass-ships.com",
                    icon: faCode
                },
            ].map((project, index) => (
                // Project Card
                <div
                    key={index}
                    className="
                        flex flex-col items-center justify-center gap-4
                        w-full h-full px-8 py-4
                        bg-white dark:bg-zinc-800/20 shadow-xl rounded-xl
                        hover:scale-105 overflow-hidden hover:bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 transition duration-300 ease-in-out
                    "
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-4xl font-thin text-gray-800 dark:text-gray-200">
                            {project.title}
                        </h1>
                        <p className="text-xl font-thin text-gray-800 dark:text-gray-200">
                            {project.description}
                        </p>
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex items-center justify-center gap-4
                            px-4 py-2
                            text-2xl font-thin text-white bg-gray-800 rounded-xl
                            shadow-xl
                        "
                    >
                        <p>
                            View Project
                        </p>
                    </a>
                </div>
            ))
        }
    </div>
</div>
)};
