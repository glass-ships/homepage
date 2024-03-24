import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppFlex from "../components/AppFlex";
import styles from "./Testbed.module.scss";
import "@/global/styles.scss";

export default function Testbed() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: "0",
        margin: "0",
      }}
    >
      <h1>Testbed</h1>
      <p>This is a testbed for new components and features.</p>

      <div id="testbed" className={styles.bed}>
        <div>
          <h3>Test AppFlex</h3>

          <AppFlex>
            {buttons.map((buttonType, index) => (
              <AppFlex direction="row" key={index}>
                {...buttonType}
              </AppFlex>
            ))}
          </AppFlex>
        </div>

        <div>
          <h3>Test Icons</h3>
          <p>These are the icons I'm using.</p>
          <AppFlex direction="row">
            {["git", "git-alt", "python", "linkedin", "envelope", "bars", "cloud-arrow-up", "code", "code-branch", "display", "terminal", "diagram-project", "file-arrow-down"].map((icon, index) => (
                <AppIcon icon={icon} size="3x" key={index} />
            ))}
          </AppFlex>
        </div>

      </div>
    </div>
  );
}

const buttonsNormal = [
  <AppButton text="Button 1" color="primary" onClick={() => console.log("Button 1 clicked")} />,
  <AppButton text="Button 2" color="secondary" onClick={() => console.log("Button 2 clicked")} />,
  <AppButton text="Button 3" icon="vial" color="tertiary" linkTo="/testbed" />,
  <AppButton text="Button 4" icon="vial" color="none" linkTo="/testbed" />,
];
const buttonsCircle = [
  <AppButton icon="vial" color="primary" design="circle" onClick={() => console.log("Icon clicked")} />,
  <AppButton icon="vial" text="Circle 2" color="secondary" design="circle" onClick={() => console.log("Icon clicked")} />,
  <AppButton text="Circle 3" color="tertiary" design="circle" onClick={() => console.log("Icon clicked")} />,
  <AppButton icon="vial" text="Circle 4" color="none" design="circle" linkTo="/testbed" />,
];
const buttonsSmall = [
  <AppButton text="Small 5" color="primary" design="small" onClick={() => console.log("Button 4 clicked")} />,
  <AppButton text="Small 6" color="secondary" design="small" onClick={() => console.log("Button 5 clicked")} />,
  <AppButton text="Small 7" icon="vial" color="tertiary" design="small" onClick={() => console.log("Button 6 clicked")} />,
  <AppButton text="Small 8" icon="vial" color="none" design="small" linkTo="/testbed" />,
];
const buttons = [buttonsNormal, buttonsCircle, buttonsSmall];
