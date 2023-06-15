import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch, faDisplay, faCloudArrowUp as faCloud, faTerminal, faDiagramProject, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (

<div 
    id="skills" 
    className="
    flex flex-col items-center justify-center gap-8
    min-h-screen w-7/12 px-8 py-16 text-center 
    bg-gradient-to-b from-black/10 via-black/50 to-black/30 backdrop-blur-2xl
    drop-shadow-xl shadow-black
    snap-y snap-mandatory
    "
>
    {/* add some padding on top when smaller */}
    <h1 className="text-7xl font-thin text-gray-200">
        Skills
    </h1>

    <div className="text-2xl font-thin text-gray-200 gap-12">
        I develop software for the scientific community for various purposes,<br />
        including <b>math</b> and <b>physics models</b>, <b>data analysis</b>, and <b>visualization</b>. <br/>
        I'm comfortable working with a variety of languages, frameworks, and tools. <br/>
        I'm always learning new things, so this list is always growing!<br/>
        You can also see my Credly badges <a href="https://credly.com/users/glass-ships/badges" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-bold">here</a>.
        <br/><br/>
    </div>
        
    {/* 3-column grid of skills (with icons) */}
    <div className="
        grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8
        items-center justify-center
    ">
        {
            [ // Array of skills
                {
                    title: "Python",
                    description: "Python is one of the most popular languages for scientific computing, owing to its ease of use and large ecosystem of libraries. It's my go-to language for scientific software development.",
                    
                    icon: faPython
                },
                {
                    title: "Git",
                    description: "Version control and code management is a must for any software project. I use Git for all of my Projects, and I'm comfortable with the command line and GitHub as well as GitLab.",
                    icon: faCodeBranch
                },
                {
                    title: "Cloud Computing",
                    description: "I've worked with cloud computing platforms such as AWS and GCP, and I'm familiar with the basics of cloud computing and deployment. I'm also familiar with Docker and containerization.",
                    icon: faCloud
                },
                {
                    title: "Web Development",
                    description: "I've worked with a variety of web technologies, including HTML, CSS, JavaScript/Typescript, React, and Vue. I'm also familiar with web hosting and deployment. (This website is built with React/TS!)",
                    icon: faDisplay
                },
                {
                    title: "Data Analysis",
                    description: "I've worked with a variety of data analysis tools, including Pandas, NumPy, and Matplotlib. I'm also familiar with data analysis techniques such as statistics and computational analysis.",
                    icon: faDiagramProject
                },
                {
                    title: "Physics",
                    description: "I have a strong background in physics, including classical mechanics, quantum mechanics, and electromagnetism, as well as a variety of mathematical techniques such as linear algebra and differential equations.",
                    icon: faUserAstronaut
                }
            ].map((skill, index) => (
                // Skill Card
                <div
                    key={index}
                    className="
                        flex flex-col items-center justify-top gap-4
                        w-full h-full px-8 py-4
                      bg-zinc-800/20 rounded-xl
                        shadow-xl
                    "
                >
                    <Icon
                        icon={skill.icon}
                        size="4x"
                        className="text-yellow-400  bg-slate-700 shadow-black shadow-lg rounded-full p-4"
                    />
                    <div className="grid grid-col items-center justify-center gap-4 ">
                        <h1 className="text-3xl  font-thin text-gray-200">
                            {skill.title}
                        </h1>
                        <div className="text-xl font-thin text-gray-200  overflow-auto">
                            {skill.description}
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
</div>

)};