import Image from "next/image";

import AppButton from "@/components/AppButton";
import AppFlex from "@/components/AppFlex";
import AppSection from "@/components/AppSection";

import logoMonarch from "@/assets/images/logo-monarch.svg";
import logoTislab from "@/assets/images/logo-tislab.svg";
import logoUCD from "@/assets/images/logo-ucd-white.png";
import logoCDMS from "@/assets/images/logo-supercdms.png";
import logoScikitHep from "@/assets/images/logo-scikit-hep.png";
import styles from "./About.module.scss";

export default function About() {
  return (
    <AppSection id="about">
      <span className="appsecheader">About</span>

      <p>
        Hi, I'm Glass - a scientific software engineer and data scientist with a Bachelor in Physics from University of Colorado Denver.
        <br />
        Currently, I work with&nbsp;
        <a href="http://berkeleybop.github.io/project/monarch/">Monarch Initiative</a>, where I maintain software infrastructure used to process, store, procure, and serve biomedical data.
        <br />
        When I'm not at work, I enjoy making music, developing and contributing to open-source Projects, and lounging with my cat.
      </p>

      <AppButton text="Download my resume" icon="file-arrow-down" linkTo="https://docs.google.com/document/d/19AHFlI_aqSv938bjgQXM9jodd2I12gmVEhtA8yXsLck/export?format=pdf" />

      <h4>I'm proud to have collaborated with:</h4>
      <AppFlex direction="row" gap="medium">
        {[
          {
            name: "University of Colorado Denver",
            url: "https://www.ucdenver.edu/",
            logo: logoUCD,
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
