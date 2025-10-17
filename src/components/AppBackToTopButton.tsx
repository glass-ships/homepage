import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { Tooltip } from "react-tooltip";
import "./AppBackToTopButton.scss";
import AppButton from "./AppButton";

interface AppBackToTopButtonProps {
  targetId?: string;
  thresholdVH?: number;
  label?: string;
  ariaLabel?: string;
}

const AppBackToTopButton: React.FC<AppBackToTopButtonProps> = ({
  targetId = "top",
  thresholdVH = 0.1,
  label, //= "Back to top",
  ariaLabel = "Back to top",
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Custom hooks equivalent to @vueuse/core
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Computed equivalent - show control after threshold
  const show = useMemo(() => {
    return scrollY > windowHeight * thresholdVH;
  }, [scrollY, windowHeight, thresholdVH]);

  // Smooth scroll to anchor or page top
  const scrollTop = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="to-top" style={{ display: show ? "flex" : "none" }} role="note" aria-label={ariaLabel}>
      <Tooltip anchorSelect="#back-to-top" content="Back to top" />
      <AppButton
        id="back-to-top"
        design="circle"
        color="secondary"
        text={label ? label : undefined}
        icon="angles-up"
        iconPosition="left"
        iconColor="yellow"
        onClick={scrollTop}
      />
    </div>
  );
};

export default AppBackToTopButton;
