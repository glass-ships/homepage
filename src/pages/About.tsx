import logoMonarch from "@/assets/images/logo-monarch.svg";
import logoTislab from "@/assets/images/logo-tislab.svg";
import logoUCD from "@/assets/images/logo-ucd-white.png";
import logoCDMS from "@/assets/images/logo-supercdms.png";
import logoScikitHep from "@/assets/images/logo-scikit-hep.png";
import Image from "next/image";
// Fullscreen page with a title and a paragraph of text.
export default function About() {
  return (
    <div
      id="about"
      className="
        flex flex-col items-center justify-center gap-8
        min-h-screen w-7/12 px-8 py-16 text-center 
        bg-gradient-to-b from-black/10 via-black/50 to-black/30 
        rounded-t-3xl drop-shadow-xl shadow-black
        snap-y snap-mandatory
    "
    >
      <div className="flex flex-col items-center justify-center gap-8 snap-center">
        <h1 className="text-7xl font-thin text-gray-200">About</h1>

        <p className="text-2xl font-mono text-gray-400">
          Hi, I&apos;m Glass - a scientific software engineer and data scientist <br />
          with a Bachelor in Physics from University of Colorado Denver. <br /> <br />
          Currently, I work with{" "}
          <a href="http://berkeleybop.github.io/project/monarch/" className="text-yellow-400 text-bold">
            Monarch Initiative
          </a>
          ,<br />
          where I maintain software infrastructure used to process,
          <br />
          store, procure, and serve biomedical data. <br /> <br />
          When I&apos;m not at work, I enjoy making music,
          <br />
          developing and contributing to open-source Projects, <br />
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
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      <p className="text-3xl text-gray-400">I'm proud to have collaborated with:</p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
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
          <a key={index} href={collaborator.url} className="w-32 h-32" target="_blank" rel="noopener noreferrer">
            <Image src={collaborator.logo} alt={collaborator.name} className="object-contain align-middle h-full" />
          </a>
        ))}
      </div>
    </div>
  );
}
