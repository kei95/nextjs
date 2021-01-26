import React from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { SlashSpace } from "../../SlashSpace/SlashSpace";
import styles from "./AboutBlock.module.css";
import { Cards } from "./components/Cards";

interface AboutBlockProps {}

export const AboutBlock: React.FC<AboutBlockProps> = ({}) => {
  return (
    <div className={styles.container}>
      <FadeInSection>
        <h2 className={styles.mainLine}>Welcome to Kei's page</h2>
        <p>
          I'm a software Engineer who loves to inspire and be inspired and by
          beautiful things. Making my idea real by creating things is my
          favorite thing to do!
        </p>
        <p>
          I'm now located in Vancouver yet always open to any kind of
          opportunity to contribute, see and experience creative solutions.
        </p>
        <p>
          Are you looking for somebody who can make something meaningful with
          you? You are in the right place. Send a message to me. I won't bite
          you!
        </p>
      </FadeInSection>
      {/* <FadeInSection> */}
      {/* <SlashSpace />
        <Cards /> */}
      <SlashSpace />
      {/* </FadeInSection> */}
    </div>
  );
};
