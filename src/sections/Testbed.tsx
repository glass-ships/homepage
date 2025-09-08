import AppButton from "../components/AppButton";
import AppFlex from "../components/AppFlex";
import AppIcon from "../components/AppIcon";
import AppSection from "@/components/AppSection";
import AppTooltip from "@/components/AppTooltip";
import faIcons from "@/global/icons";
import styles from "./Testbed.module.scss";
import AppGrid from "@/components/AppGrid";


const icons = [
  "not-an-icon",
  "loading",
  "logo",
  ...Object.keys(faIcons)];

// Split into 4 contiguous groups
const groups: string[][] = [];
const groupCount = 4;
const chunkSize = Math.ceil(icons.length / groupCount);
for (let i = 0; i < groupCount; i++) {
  const start = i * chunkSize;
  const end = start + chunkSize;
  groups.push(icons.slice(start, end));
}

// Sizes for each group (adjust if your AppIcon supports different size tokens)
const groupSizes = [
  "large",
  "medium",
  "small",
  "tiny",
] as const;



export default function Testbed() {
  return (
    <>
      {/* Title */}
      <AppSection width="big" height="auto" design="fill">
        <h1>Testbed</h1>
        <p>This is a testbed for new components and features.</p>
      </AppSection>

      {/* Buttons */}
      <AppSection width="big" height="auto" design="fill">
        <div className={styles.section}>
          <h3>Test AppButtons</h3>
          <AppFlex>
            {/* normal */}
            <AppFlex direction="row">
              <AppButton text="Button 1" color="primary" onClick={() => console.log("Button 1 clicked")} />
              <AppButton text="Button 2" color="secondary" onClick={() => console.log("Button 2 clicked")} />
              <AppButton text="Button 3" icon="vial" color="tertiary" linkTo="/testbed" />
              <AppButton text="Button 4" icon="vial" color="none" linkTo="/" />
            </AppFlex>
            {/* circle */}
            <AppFlex>
              <AppButton icon="vial" color="primary" design="circle" onClick={() => console.log("Icon clicked")} />
              <AppButton
                icon="vial"
                text="Circle 2"
                color="secondary"
                design="circle"
                onClick={() => console.log("Icon clicked")}
              />
              <AppButton text="Circle 3" color="tertiary" design="circle" onClick={() => console.log("Icon clicked")} />
              <AppButton icon="vial" text="Circle 4" color="none" design="circle" linkTo="/testbed" />
            </AppFlex>
            {/* small */}
            <AppFlex>
              <AppButton
                icon="vial"
                color="primary"
                design="small"
                onClick={() => console.log("Button 4 clicked")}
              />
              <AppButton
                text="Small 6"
                color="secondary"
                design="small"
                onClick={() => console.log("Button 5 clicked")}
              />
              <AppButton text="Small 7" color="tertiary" design="small" onClick={() => console.log("Button 6 clicked")} />
              <AppButton text="Small 8" icon="vial" color="none" design="small" linkTo="/testbed" />
            </AppFlex>
          </AppFlex>
        </div>
      </AppSection>

      {/* Icons */}
      <AppSection width="medium" height="auto" design="fill">
        <div className={styles.section}>
          <h3>Test Icons</h3>
          {groupSizes.map((groupSize, gidx) => (
            <AppFlex key={gidx} direction="row">
              {icons.map((icon, idx) => (
                <AppIcon
                  key={idx}
                  icon={icon}
                  color="yellow"
                  size={groupSizes[gidx]}
                  background
                />
              ))}
            </AppFlex>
          ))}
          {/* <AppIcon icon="not-an-icon" color="red" size="large" /> */}
          {/* {groups.map((group, gidx) => (
            <AppFlex key={gidx} direction="row">
              {group.map((icon, iidx) => (
                <AppIcon
                  key={iidx}
                  icon={icon}
                  color="yellow"
                  size={groupSizes[gidx]}
                  background
                />

              ))}
            </AppFlex>
          ))} */}
        </div>
      </AppSection>

      {/* Tooltip */}
      <AppSection width="big" height="auto" design="fill">
        <h3>Test Tooltip</h3>
        <AppFlex direction="row">
          <AppTooltip content="Tooltip content" position="left">
            <AppButton text="Tooltip Left" color="primary" />
          </AppTooltip>
          <AppTooltip content="This is an example of a tooltip with longer text content" position="top">
            <AppButton text="Tooltip Top" color="primary" />
          </AppTooltip>
          <AppTooltip content="This is an example of a tooltip with longer text content" position="bottom">
            <AppButton design="circle" icon="vial" color="primary" />
          </AppTooltip>
          <AppTooltip content="Tooltip content" position="right">
            <AppButton design="small" icon="vial" color="primary" />
          </AppTooltip>
        </AppFlex>

        <AppTooltip content="Tooltip content" position="top">
          <p>Hover over me too.</p>
        </AppTooltip>
      </AppSection>
    </>
  );
}

