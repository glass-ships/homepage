import Image from "next/image";

import AppButton from "@/components/AppButton";
import AppFlex from "@/components/AppFlex";
import AppSection from "@/components/AppSection";
import AppTooltip from "@/components/AppTooltip";

import logoCDMS from "@/assets/images/logo-supercdms.png";
import logoMonarch from "@/assets/images/logo-monarch.svg";
import logoORNL from "@/assets/images/logo-ornl.png";
import logoScikitHep from "@/assets/images/logo-scikit-hep.png";
import logoTislab from "@/assets/images/logo-tislab.svg";
import logoUCD from "@/assets/images/logo-ucd-white.png";
import styles from "./About.module.scss";

export default function About() {
  return (
    <AppSection id="about" width="medium">
      <h2 className="appsecheader">About</h2>

      <p>
        Hi, I'm Glass - a scientific software engineer and data scientist with a Bachelor in Physics from University of Colorado Denver.
      </p>
      <p>
        Currently, I work with&nbsp;
        <a href="https://neutrons.ornl.gov">Oak Ridge National Lab</a>, where I develop analysis software, web apps, and infrastructure for one of the world's leading neutron science research facilities.
      </p>
      <p>
        When I'm not at work, I enjoy making music, developing and contributing to open-source projects, and lounging with my cat.
      </p>

      <AppButton text="Download my resume" icon="file-arrow-down" linkTo="https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf" />

      <h5>I'm proud to have collaborated with:</h5>
      <AppFlex direction="row" gap="tiny">
        {[
          {
            name: "Oak Ridge National Laboratory",
            url: "https://neutrons.ornl.gov/",
            logo: logoORNL,
          },
          {
            name: "Monarch Initiative",
            url: "https://github.com/monarch-initiative/",
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
        ].map((collaborator, index) => (
          // Collaborator logos
          <a key={index} href={collaborator.url} target="_blank" rel="noopener noreferrer">
            <Image src={collaborator.logo} alt={collaborator.name} className={styles.collaborator} />
          </a>
        ))}
      </AppFlex>
    </AppSection>
  );
}
