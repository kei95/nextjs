import React from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection.tsx";
import { SlashSpace } from "../../SlashSpace/SlashSpace.tsx";
import styles from "./AboutBlock.module.css";
import { Cards } from "./components/Cards";

interface AboutBlockProps {}

export const AboutBlock: React.FC<AboutBlockProps> = ({}) => {
  return (
    <div className={styles.container}>
      <FadeInSection>
        <h2 className={styles.mainLine}>Welcome to Kei's page</h2>
        <p>
          This is a testing purpose website for Kei to understand how WordPress
          works. He is now amazed how easy this one static web page can be made
          by using it.
        </p>
        <p>
          He is now located in Vancouver yet always open to any kind of
          opportunity to contribute and improve his skills and gain experiences.
        </p>
        <p>
          Are you looking for somebody who can make something meaningful with
          you? You are in the right place. Send a message to him, he doesn’t
          bite you!
        </p>
      </FadeInSection>
      <FadeInSection>
        <SlashSpace />
        <Cards />
        <SlashSpace />
      </FadeInSection>
    </div>
  );
};
