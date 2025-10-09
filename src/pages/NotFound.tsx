import img404 from "@/assets/images/404.png";
import AppButton from "@/components/AppButton";
import AppSection from "@/components/AppSection";
import Nexus from "@/components/Nexus";
import "@/global/styles.scss";

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
