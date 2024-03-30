import AppButton from "@/components/AppButton";
import AppSection from "@/components/AppSection";
import AppFlex from "@/components/AppFlex";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <AppSection id="contact" width="medium">
      <span className="appsecheader">Contact</span>
      <AppFlex>
        <p>
          Interested in working together? <br />
          Reach out to me at any of the links below,
          <br />
          or use this form to send me an email.
        </p>
        <form className={styles.form} action="https://formspree.io/f/moqpzbzj" method="POST">
          <input className={styles.textbox} type="email" name="email" placeholder="Your email" />
          <input className={styles.textbox} type="text" name="subject" placeholder="Subject" />
          <textarea className={styles.textbox} name="message" placeholder="Your message" rows={10} />
          <AppButton text="Send" type="submit" color="tertiary"/>
        </form>
      </AppFlex>
    </AppSection>
  );
}
