import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppFlex from "../components/AppFlex";
import AppSection from "@/components/AppSection";
import styles from "./Testbed.module.scss";

export default function Testbed() {
  return (
    <>
      {/* <div id="testbed" className={styles.bed}></div> */}
      <AppSection width="big" height="auto" design="fill">
        <h1>Testbed</h1>
        <p>This is a testbed for new components and features.</p>
      </AppSection>

      <AppSection width="big" height="auto" design="fill">
        <div className={styles.section}>
          <h3>Test AppButtons</h3>
          <AppFlex>
            <AppFlex direction="row">
              <AppButton text="Button 1" color="primary" onClick={() => console.log("Button 1 clicked")} />
              <AppButton text="Button 2" color="secondary" onClick={() => console.log("Button 2 clicked")} />
              <AppButton text="Button 3" icon="vial" color="tertiary" linkTo="/testbed" />
              <AppButton text="Button 4" icon="vial" color="none" linkTo="/" />
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
      </AppSection>

      <AppSection width="big" height="auto" design="fill">
        <div className={styles.section}>
          <h3>Test Icons</h3>
          <AppFlex direction="row">
            {icons.map((icon, index) => (
              <AppIcon
                key={index}
                icon={icon}
                // size="1em"
                color="white"
                background
              />
            ))}
          </AppFlex>
        </div>
        {/* </div> */}
      </AppSection>
    </>
  );
}

const icons = [
  // brand icons
  "git",
  "git-alt",
  "linkedin",
  "python",
  // solid icons
  "arrow-up-right-from-square",
  "bars",
  "cloud-arrow-up",
  "code",
  "code-branch",
  "diagram-project",
  "display",
  "envelope",
  "file-arrow-down",
  "terminal",
  "user-astronaut",
  // regular icons
  "paper-plane",
  "vial",
];
