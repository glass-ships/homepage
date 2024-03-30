import AppSection from "@/components/AppSection";
import AppGrid from "@/components/AppGrid";
import AppIcon from "@/components/AppIcon";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <AppSection id="skills" width="big">
        <span className="appsecheader">Skills</span>

        <p>
          I develop software for the scientific community for various purposes, including <b>math</b> and <b>physics models</b>, and <b>data processing, analysis, and visualization</b>.
          <br />
          I&apos;m comfortable working with a variety of languages, frameworks, and tools.
          <br />
          I&apos;m always learning new things, so this list is always growing!
          <br />
          You can also see my Credly badges{" "}
          <a href="https://credly.com/users/glass-ships/badges" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
          <br />
          <br />
        </p>

      {/* <div className={styles.skillgrid}> */}
      <AppGrid cols={3}>
        {skills.map((skill, index) => (
          // Skill Card
          <div key={index} className={styles.skillcard}>
            <AppIcon icon={skill.icon} size="4x" color="#facc15" background={true}/>
            <div className="grid grid-col items-center justify-center gap-4 ">
              <h5>{skill.title}</h5>
              <span className={styles.skilltext}>{skill.description}</span>
              {/* <div className="text-xl font-thin text-gray-200  overflow-auto">{skill.description}</div> */}
            </div>
          </div>
        ))}
      </AppGrid>
      {/* </div> */}
    </AppSection>
  );
}

// Array of skills
const skills = [
  {
    title: "Python",
    description:
      "Python is one of the most popular languages for scientific computing, owing to its ease of use and large ecosystem of libraries. It&apos;s my go-to language for scientific software development.",

    icon: "python",
  },
  {
    title: "Git",
    description: "Version control and code management are a must for any software project. I use Git for all of my Projects, and I&apos;m comfortable with the git CLI, and GitHub as well as GitLab.",
    icon: "code-branch",
  },
  {
    title: "Cloud Computing",
    description:
      "I&apos;ve worked with cloud computing platforms such as AWS and GCP, and I&apos;m familiar with the basics of cloud computing and deployment. I&apos;m also familiar with Docker and containerization.",
    icon: "cloud-arrow-up",
  },
  {
    title: "Web Development",
    description:
      "I&apos;ve worked with a variety of web technologies, including HTML, CSS, JavaScript/Typescript, React, and Vue. I&apos;m also familiar with web hosting and deployment. (This website is built with React/TS!)",
    icon: "display",
  },
  {
    title: "Data Analysis",
    description:
      "I&apos;ve worked with a variety of data analysis tools, including Pandas, NumPy, and Matplotlib. I&apos;m also familiar with data analysis techniques such as statistics and computational analysis.",
    icon: "diagram-project",
  },
  {
    title: "Physics",
    description:
      "I have a strong background in physics, including classical mechanics, quantum mechanics, and electromagnetism, as well as a variety of mathematical techniques such as linear algebra and differential equations.",
    icon: "user-astronaut",
  },
];
