import type React from "react";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "./AppBackToTopButton.scss";
import AppButton from "./AppButton";

export interface AppBackToTopButtonProps {
  /** Id of the element to scroll to. If no element has it, scrolls to the top of the page. Defaults to `"top"`. */
  targetId?: string;
  /** How far the page must be scrolled before the button shows, as a fraction of the window height. Defaults to `0.1`. */
  thresholdVH?: number;
  /** Visible text on the button. Without it, the button shows only an icon. */
  label?: string;
  /** The button's accessible name, also shown as its tooltip. Defaults to `"Back to top"`. */
  ariaLabel?: string;
}

/**
 * A round button fixed to the bottom right of the window. It appears once the page is scrolled,
 * and smoothly scrolls back up when clicked.
 *
 * Render one per page: the button has a fixed id (`back-to-top-button`) for its tooltip.
 *
 * @example
 * ```tsx
 * <main>
 *   <AppBackToTopButton />
 *   ...
 * </main>
 * ```
 */
const AppBackToTopButton: React.FC<AppBackToTopButtonProps> = ({
  targetId = "top",
  thresholdVH = 0.1,
  label, //= "Back to top",
  ariaLabel = "Back to top",
}) => {
  // only the boolean is state, so scrolling re-renders only when the button appears or hides
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY > window.innerHeight * thresholdVH);
    update(); // the page may already be scrolled (reload, back button)
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [thresholdVH]);

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
    <div className="to-top" style={{ display: show ? "flex" : "none" }}>
      <Tooltip content={ariaLabel} anchorSelect="#back-to-top-button" place="left" />
      <AppButton
        id="back-to-top-button"
        design="circle"
        color="primary"
        text={label ? label : undefined}
        ariaLabel={ariaLabel}
        icon="angles-up"
        onClick={scrollTop}
      />
    </div>
  );
};

export default AppBackToTopButton;
