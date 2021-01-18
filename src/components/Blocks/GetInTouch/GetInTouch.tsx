import React from "react";
import { EmailButton } from "../../CustomButtons/EmailButton";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import styles from "./GetInTouch.module.css";

interface GetInTouchProps {}

export const GetInTouch: React.FC<GetInTouchProps> = ({}) => {
  return (
    <FadeInSection>
      <div className={styles.container}>
        <div className={styles.textsContainer}>
          <h2 className={styles.mainLine}>Get in touch</h2>
          <p className={styles.subLine}>
            Thank you for reading through my portfolio page. I'm always open to
            connect with anybody who is in this industry! Please reach me out if
            you have any questions or even want to say hi, I'll get back to you
            asap!
          </p>
        </div>
        <EmailButton />
      </div>
    </FadeInSection>
  );
};
