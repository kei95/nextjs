import React from "react";
import { FadeInSection } from "src/components/FadeInSection";
import { SlashSpace } from "../../SlashSpace/SlashSpace";
import styles from "./AboutBlock.module.css";

interface AboutBlockProps {}

export const AboutBlock: React.FC<AboutBlockProps> = ({}) => {
  return (
    <section className={styles.container} id="about">
      <FadeInSection>
        <h2 className={styles.mainLine}>Welcome to Kei's page</h2>
        <p>
          I'm a software Engineer who loves to inspire and be inspired by
          beautiful things. The moment when my idea turns to reality is the best
          moment of my life!
        </p>
        <p>
          I'm now located in Vancouver yet always open to any kind of
          opportunity to contribute, see and experience creative solutions.
        </p>
        <p>
          Are you looking for somebody who can make something amazing with? You
          are in the right place. Feel free to send a message me!
        </p>
      </FadeInSection>
      <SlashSpace />
    </section>
  );
};
