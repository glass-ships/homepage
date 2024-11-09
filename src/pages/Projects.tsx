import AppSection from "@/components/AppSection";
import AppGrid from "@/components/AppGrid";
import AppButton from "@/components/AppButton";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <AppSection id="projects" width="big">
      <h2 className="appsecheader">Projects</h2>

      <p>
        These are some of the projects I've worked on.
        <br />
        You can also see my recent activity on{" "}
        <a href="https://github.com/glass-ships" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <AppGrid cols={3}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <AppButton text="View Project" icon="arrow-up-right-from-square" linkTo={project.link} />
          </div>
        ))}
      </AppGrid>
    </AppSection>
  );
}

const projects = [
  {
    title: "Koza",
    description: `A functionally designed data transformation library in Python. 
      Koza is intended to be easy to use and capable of handling large datasets.
      It is primarily used in the Monarch Initiative's data ingest pipeline, 
      but can be used for many data transformation tasks.`,
    link: "https://monarch-initiative.github.io/koza",
  },
  {
    title: "Monarch Ingest",
    description: `A collection of Koza ingests integrating several data sources into a single knowledge graph.
      I contribute to data processing, validation, normalization, and integration,
      as well as the pipeline's infrastructure, including deployment with Google Cloud Platform.`,
    link: "https://monarch-initiative.github.io/monarch-ingest/",
  },
  {
    title: "Monarch UI",
    description: `Monarch Initiative's webpage, which allows users to search for genes, diseases,
      and other biological entities.I wrote the Python library for querying the Monarch database for backend,
      a FastAPI wrapper for the library, and contribute to development of a Vue/TS frontend.`,
    link: "https://monarch-app.monarchinitiative.org/",
  },
  {
    title: "CDMS JupyterLab",
    description: `Dark matter data analysis requires a complex and fragile system of dependencies. 
      To streamline the analysis process, I containerized the environment in a Dockerfile
       to work with an instance of JupyterHub hosted at SLAC.`,
    link: "https://github.com/glass-ships/cdms-jupyterlab",
  },
  {
    title: "LinkML",
    description: `A language for describing data models, generating classes in several languages and formats.
       I contributed to several aspects of the project, including documentation, bug fixes,
        and new features for the Python, Typescript generators.`,
    link: "https://linkml.github.io/linkml",
  },
  {
    title: "Compass Bot",
    description: `A general purpose Discord bot in Python, including custom commands, music player, 
      and moderation utilities. Mostly a personal project, but is used in several servers,
       and allows me to experiment with new techniques and technologies.`,
    link: "https://glass-ships.gitlab.io/compass-bot",
  },
];
