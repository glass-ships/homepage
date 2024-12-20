import { library } from "@fortawesome/fontawesome-svg-core";
import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/free-solid-svg-icons";
import * as far from "@fortawesome/free-regular-svg-icons";

const faIcons: { [key: string]: fab.IconDefinition } = {
  // Brand icons
  git: fab.faGitAlt,
  "git-alt": fab.faGitAlt,
  linkedin: fab.faLinkedin,
  python: fab.faPython,
  // Regular icons
  "paper-plane": far.faPaperPlane,
  square: far.faSquare,
  vial: fas.faVial,
  // Solid icons
  "arrow-up-right-from-square": fas.faArrowUpRightFromSquare,
  bars: fas.faBars,
  "chevron-down": fas.faChevronDown,
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
  "user-astronaut": fas.faUserAstronaut,
};

library.add(...Object.values(faIcons));
export default faIcons;

/** MONARCH ICONS */
// const icons = [
//     fab.faGithub,
//     fab.faLinkedin,
//     fab.faMedium,
//     fab.faYoutube,
//     far.faChartBar,
//     far.faCircleCheck,
//     far.faCirclePause,
//     far.faCircleQuestion,
//     far.faCircleXmark,
//     far.faClipboard,
//     far.faComment,
//     far.faComments,
//     far.faCopy,
//     far.faEnvelope,
//     far.faEye,
//     far.faFileLines,
//     far.faFloppyDisk,
//     far.faLightbulb,
//     far.faNewspaper,
//     far.faPaperPlane,
//     far.faSquare,
//     fas.faAngleDown,
//     fas.faAngleLeft,
//     fas.faAngleRight,
//     fas.faAnglesLeft,
//     fas.faAnglesRight,
//     fas.faAngleUp,
//     fas.faArrowDown,
//     fas.faArrowDownLong,
//     fas.faArrowLeft,
//     fas.faArrowLeftLong,
//     fas.faArrowRight,
//     fas.faArrowRightLong,
//     fas.faArrowsLeftRight,
//     fas.faArrowUp,
//     fas.faArrowUpLong,
//     fas.faArrowUpRightFromSquare,
//     fas.faAsterisk,
//     fas.faBarcode,
//     fas.faBars,
//     fas.faBarsProgress,
//     fas.faBook,
//     fas.faBullhorn,
//     fas.faCheck,
//     fas.faCircleExclamation,
//     fas.faCircleInfo,
//     fas.faClipboardList,
//     fas.faClockRotateLeft,
//     fas.faCode,
//     fas.faCogs,
//     fas.faDatabase,
//     fas.faDownload,
//     fas.faEquals,
//     fas.faFeatherPointed,
//     fas.faFilter,
//     fas.faFlask,
//     fas.faHandshakeAngle,
//     fas.faLink,
//     fas.faLocationDot,
//     fas.faMagnifyingGlass,
//     fas.faMaximize,
//     fas.faMinimize,
//     fas.faNotesMedical,
//     fas.faPersonRunning,
//     fas.faScaleBalanced,
//     fas.faShareNodes,
//     fas.faSitemap,
//     fas.faSquareCheck,
//     fas.faSubscript,
//     fas.faTable,
//     fas.faUpload,
//     fas.faUsers,
//     fas.faXmark,
//   ];
