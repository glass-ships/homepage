// import logoMonarch from "@/assets/images/logo-monarch.svg";
import logoMonarch from "@/assets/images/logo-monarch-no-clip.svg";
import logoORNL from "@/assets/images/logo-ornl.png";
import logoScikitHep from "@/assets/images/logo-scikit-hep.png";

import logoCDMS from "@/assets/images/logo-supercdms.png";
import logoTislab from "@/assets/images/logo-tislab.svg";
import logoUCD from "@/assets/images/logo-ucd.png";
import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppFlex from "@/components/ui/AppFlex";
import AppSection from "@/components/ui/AppSection";
import styles from "./About.module.scss";

export default function About() {
  return (
    <AppSection id="about" width="big">
      <AppCard>
        <h2 className="appsecheader">About</h2>
        <p>
          I'm Glass - a scientific software engineer and data scientist with a Bachelor in Physics from University of
          Colorado Denver.
        </p>
        <p>
          Currently, I work at&nbsp;
          <a href="https://neutrons.ornl.gov" target="_blank" rel="noopener noreferrer">
            Oak Ridge National Lab
          </a>
          , where I develop analysis software, web apps, and infrastructure for one of the world's leading neutron
          science research facilities.
        </p>
        <p>
          When I'm not at work, I enjoy making music, gaming, developing and contributing to open-source projects,
          <br />
          and hanging out with my cats, Korra and Bonnie.
        </p>
        <AppButton
          text="Download my resume"
          icon="file-arrow-down"
          linkTo="https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf"
        />
        <h5>I'm proud to have collaborated with:</h5>
        <AppFlex direction="row" gap="tiny">
          {collaborations.map((collaborator) => (
            <a
              key={`collaborator-${collaborator.logo}`}
              href={collaborator.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={collaborator.logo} alt={collaborator.name} className={styles.collaborator} />
            </a>
          ))}
        </AppFlex>
      </AppCard>
    </AppSection>
  );
}

const collaborations = [
  {
    name: "Oak Ridge National Laboratory",
    url: "https://neutrons.ornl.gov/",
    logo: logoORNL,
  },
  {
    name: "Monarch Initiative",
    url: "https://monarchinitiative.org",
    logo: logoMonarch,
  },
  {
    name: "TISLab",
    url: "https://tislab.org/",
    logo: logoTislab,
  },
  {
    name: "SuperCDMS",
    url: "https://supercdms.slac.stanford.edu/",
    logo: logoCDMS,
  },
  {
    name: "Scikit-HEP",
    url: "https://scikit-hep.org/",
    logo: logoScikitHep,
  },
  {
    name: "University of Colorado Denver",
    url: "https://www.ucdenver.edu/",
    logo: logoUCD,
  },
];
