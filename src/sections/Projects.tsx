import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppGrid from "@/components/ui/AppGrid";
import AppSection from "@/components/ui/AppSection";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <AppSection id="projects" width="big">
      <AppCard>
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
      </AppCard>

      <AppGrid cols={3}>
        {projects.map((project) => {
          return (
            <AppCard key={`project-${project.title}`} className={styles.project}>
              <h5>{project.title}</h5>
              <p>
                {project.description.split("\n").map((line, index) => (
                  <span key={`project-${project.title}-line-${index}`}>
                    {line}
                    {index < project.description.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <AppButton text="View Project" icon="arrow-up-right-from-square" linkTo={project.link} newTab />
            </AppCard>
          );
        })}
      </AppGrid>
    </AppSection>
  );
}

const projects = [
  {
    title: "Semsimian Server",
    description: `A web server written in Rust which serves a RESTful API for the Semsimian library,
      which provides efficient semantic similarity calculations for semantic similarity,
      such as Jaccard and Reznik similarity scores.`,
    link: "https://github.com/monarch-initiative/semsimian-server",
  },
  {
    title: "Koza",
    description: `A functionally designed data transformation library in Python. 
      Koza is intended to be easy to use and capable of handling large datasets.
      It is primarily used in the Monarch Initiative's data ingest pipeline, 
      but can be used for many data transformation tasks.`,
    link: "https://monarch-initiative.github.io/koza",
  },
  {
    title: "Monarch UI",
    description: `Monarch Initiative's webpage, which allows users to search for genes, diseases, and other biological entities.
      Wrote the Python library for querying the Monarch database, a FastAPI web server, and contribute to development of a Vue/TS frontend.`,
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
