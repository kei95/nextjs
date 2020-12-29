import React from "react";
import { SlashSpace } from "../../SlashSpace/SlashSpace.tsx";
import * as styles from "./AboutBlock.module.css";

interface AboutBlockProps {}

export const AboutBlock: React.FC<AboutBlockProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainLine}>Welcome to Kei's page</h2>
      <p>
        This is a testing purpose website for Kei to understand how WordPress
        works. He is now amazed how easy this one static web page can be made by
        using it.
      </p>
      <p>
        He is now located in Vancouver yet always open to any kind of
        opportunity to contribute and improve his skills and gain experiences.
      </p>
      <p>
        Are you looking for somebody who can make a web page for cheaper price?
        You are in the right place. Send message to him he doesn’t bite you!
      </p>
      <SlashSpace />
    </div>
  );
};
