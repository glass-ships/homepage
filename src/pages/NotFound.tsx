import React from "react";
import img404 from "@/assets/images/404.png";
import AppButton from "@/components/ui/AppButton";
import AppSection from "@/components/ui/AppSection";
import "@/global/styles.scss";

const Nexus = React.lazy(() => import("@/components/Nexus"));

export default function NotFound() {
  return (
    <main>
      <Nexus />
      <AppSection>
        <picture>
          <img src={img404} alt="404 Not Found" />
        </picture>
        <h1>Page Not Found</h1>
        <AppButton linkTo="/" text="Return to Home" />
      </AppSection>
    </main>
  );
}
