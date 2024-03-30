import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppFlex from "../components/AppFlex";
import AppSection from "@/components/AppSection";
import styles from "./Testbed.module.scss";
// import "@/global/styles.scss";

export default function Testbed() {
  return (
    <AppSection width="big" design="fill">
      {/* // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     textAlign: "center",
    //     width: "100%",
    //     padding: "10px",
    //     margin: "0",
    //   }}
    // > */}
      <h1>Testbed</h1>
      <p>This is a testbed for new components and features.</p>

      <div id="testbed" className={styles.bed}>
        <div className={styles.section}>
          <h3>
            Test AppButtons
            <br />
          </h3>
          <AppFlex>
            {/* {buttons.map((buttonSet, index) => (
              <AppFlex key={index} direction="row">
                {buttonSet.map((button, index) => (
                  button
                ))}
              </AppFlex>
            ))} */}
            <AppFlex direction="row">
              <AppButton text="Button 1" color="primary" onClick={() => console.log("Button 1 clicked")} />
              <AppButton text="Button 2" color="secondary" onClick={() => console.log("Button 2 clicked")} />
              <AppButton text="Button 3" icon="vial" color="tertiary" linkTo="/testbed" />
              <AppButton text="Button 4" icon="vial" color="none" linkTo="/testbed" />
            </AppFlex>
            <AppFlex>
              <AppButton icon="vial" color="primary" design="circle" onClick={() => console.log("Icon clicked")} />
              <AppButton icon="vial" text="Circle Two" color="secondary" design="circle" onClick={() => console.log("Icon clicked")} />
              <AppButton text="Circle 3" color="tertiary" design="circle" onClick={() => console.log("Icon clicked")} />
              <AppButton icon="vial" text="Circle 4" color="none" design="circle" linkTo="/testbed" />
            </AppFlex>
            <AppFlex>
              <AppButton text="Small 5" color="primary" design="small" onClick={() => console.log("Button 4 clicked")} />
              <AppButton text="Small 6" color="secondary" design="small" onClick={() => console.log("Button 5 clicked")} />
              <AppButton icon="vial" color="tertiary" design="small" onClick={() => console.log("Button 6 clicked")} />
              <AppButton text="Small 8" icon="vial" color="none" design="small" linkTo="/testbed" />
            </AppFlex> 
          </AppFlex>
        </div>

        <div className={styles.section}>
          <h3>Test Icons</h3>
          <AppFlex direction="row">
            {["git", "git-alt", "python", "linkedin", "envelope", "bars", "cloud-arrow-up", "code", "code-branch", "display", "terminal", "diagram-project", "file-arrow-down", "arrow-up-right-from-square"].map((icon, index) => (
              <AppIcon key={index} icon={icon} size="3x" color="white" background />
            ))}
          </AppFlex>
        </div>
      </div>
      {/* </div> */}
    </AppSection>
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
  <AppButton icon="vial" text="Circle Two" color="secondary" design="circle" onClick={() => console.log("Icon clicked")} />,
  <AppButton text="Circle 3" color="tertiary" design="circle" onClick={() => console.log("Icon clicked")} />,
  <AppButton icon="vial" text="Circle 4" color="none" design="circle" linkTo="/testbed" />,
];
const buttonsSmall = [
  <AppButton text="Small 5" color="primary" design="small" onClick={() => console.log("Button 4 clicked")} />,
  <AppButton text="Small 6" color="secondary" design="small" onClick={() => console.log("Button 5 clicked")} />,
  <AppButton icon="vial" color="tertiary" design="small" onClick={() => console.log("Button 6 clicked")} />,
  <AppButton text="Small 8" icon="vial" color="none" design="small" linkTo="/testbed" />,
];
const buttons = [buttonsNormal, buttonsCircle, buttonsSmall];
