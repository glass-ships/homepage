import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppFlex from "@/components/ui/AppFlex";
import AppSection from "@/components/ui/AppSection";
import styles from "./Contact.module.scss";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <AppSection id="contact" width="medium">
      <AppCard>
        <h2 className="appsecheader">Contact</h2>
        <p>
          Interested in working together? <br />
          Reach out to me any of the links in the footer, <br />
          or send me an email using the form below!
        </p>
        <p>I'll do my best to get back to you as soon as I can!</p>
        <AppFlex>
          <form className={styles.form} action="https://formspree.io/f/moqpzbzj" method="POST">
            <input className={styles.textbox} type="email" name="email" placeholder="Your email" />
            <input className={styles.textbox} type="text" name="subject" placeholder="Subject" />
            <textarea className={styles.textbox} name="message" placeholder="Your message" rows={10} />
            <div style={buttonStyle}>
              <AppButton text="Send" type="submit" icon="paper-plane" color="tertiary" />
            </div>
          </form>
        </AppFlex>
      </AppCard>
    </AppSection>
  );
}
