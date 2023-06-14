import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch, faDisplay, faCloudArrowUp as faCloud, faTerminal, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {
    return (

// 3-column grid of skills (with icons)
<div 
    id="Projects" 
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

    <div className="
        grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8
        items-center justify-center
    ">
        { // React element wrapper
            [ // Array of Projects
                {
                    title: "Koza",
                    description: "A data transformation library in Python. Koza is a library for transforming data in a functional style. It is designed to be easy to use, and to be able to handle large datasets. It is primarily used in the Monarch Initiative's data pipeline, but can be used for many data transformation tasks.",
                    link: "https://monarch-initiative.github.io/koza",
                },
                {
                    title: "Monarch Ingest",
                    description: "Worked on the Monarch Initiative's data pipeline, which integrates data from many sources into a single graph database (data processing, validation, normalization, and integration). I also work on the pipeline's infrastructure, including cloud deployment with Google Cloud Platform.",
                    link: "https://monarch-ingest.monarchinitiative.org/",
                },
                {
                    title: "Monarch UI",
                    description: "Worked on the Monarch Initiative's user interface, which allows users to search for genes, diseases, and other biological entities. Wrote Python library for querying the Monarch database for backend, a FastAPI wrapper for the library, and contribute to development of a Vue3/TS frontend.",
                    link: "https://monarch-app.monarchinitiative.org/",
                },
                {
                    title: "CDMS JupyterLab",
                    description: "Dark matter data analysis requires a complex and fragile system of dependencies. To streamline the analysis process, I containerized the environment in a Dockerfile to work with an instance of JupyterHub hosted at SLAC.",
                    link: "https://github.com/glass-ships/cdms-jupyterlab",
                },
                {
                    title: "LinkML",
                    description: "LinkML is a language for describing data models, including generators for schema representations in several languages and formats. I contribute to several aspects of the project, including documentation, bug fixes, and new features for Python, Typescript, and other generators.",
                    link: "https://linkml.github.io/linkml",
                },
                {
                    title: "Compass Bot",
                    description: "A general purpose Discord bot in Python with many features, including a custom command system, a music player, and a moderation system. Primarily a personal project, but is used in several servers, and allows me to experiment with new techniques and technologies.",
                    link: "https://glass-ships.gitlab.io/compass-bot",
                },
            ].map((project, index) => (
                // Project Card
                <div
                    key={index}
                    className="
                        flex flex-col justify-center gap-4
                        w-full h-full px-8 py-4
                        bg-white dark:bg-zinc-800/20 shadow-xl rounded-xl
                        hover:scale-105 overflow-hidden hover:bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 transition duration-300 ease-in-out
                    "
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-3xl font-thin text-gray-800 dark:text-gray-200">
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
