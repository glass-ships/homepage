import { library } from "@fortawesome/fontawesome-svg-core";
import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/free-solid-svg-icons";
import * as far from "@fortawesome/free-regular-svg-icons";

const faIcons: { [key: string]: fab.IconDefinition } = {
  // Brand icons
  github: fab.faGithub,
  linkedin: fab.faLinkedin,
  python: fab.faPython,
  // Regular icons
  "paper-plane": far.faPaperPlane,
  square: far.faSquare,
  vial: fas.faVial,
  // Solid icons
  "angle-up": fas.faAngleUp,
  "angle-down": fas.faAngleDown,
  "angle-left": fas.faAngleLeft,
  "angle-right": fas.faAngleRight,
  "angles-up": fas.faAnglesUp,
  "angles-down": fas.faAnglesDown,
  "angles-left": fas.faAnglesLeft,
  "angles-right": fas.faAnglesRight,
  "arrow-up-right-from-square": fas.faArrowUpRightFromSquare,
  bars: fas.faBars,
  "cloud-arrow-up": fas.faCloudArrowUp,
  code: fas.faCode,
  "code-branch": fas.faCodeBranch,
  "diagram-project": fas.faDiagramProject,
  display: fas.faDisplay,
  envelope: fas.faEnvelope,
  "file-arrow-down": fas.faFileDownload,
  filter: fas.faFilter,
  "magnifying-glass": fas.faMagnifyingGlass,
  "square-check": fas.faSquareCheck,
  terminal: fas.faTerminal,
  trash: fas.faTrash,
  upload: fas.faUpload,
  "user-astronaut": fas.faUserAstronaut,
  xmark: fas.faXmark,
};

library.add(...Object.values(faIcons));
export default faIcons;
