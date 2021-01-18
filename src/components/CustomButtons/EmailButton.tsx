import React from "react";
import styles from "./Button.module.css";

interface EmailButtonProps {}

export const EmailButton: React.FC<EmailButtonProps> = ({}) => {
  return (
    <a
      href="mailto: kei0613shine.star@gmail.com"
      className={styles.container}
      target="_blank"
    >
      <p className={styles.buttonText}>Send an email</p>
    </a>
  );
};
