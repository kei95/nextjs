import React from "react";
import useDarkMode from "use-dark-mode";
import styles from "./Button.module.css";

export const EmailButton = (): JSX.Element => {
  const isDarkMode = useDarkMode();

  return (
    <a
      href="mailto: kei0613shine.star@gmail.com"
      className={
        isDarkMode.value ? styles.containerDarkTheme : styles.container
      }
      target="_blank"
    >
      <p
        className={
          isDarkMode.value ? styles.buttonTextDarkTheme : styles.buttonText
        }
      >
        Send an email
      </p>
    </a>
  );
};
