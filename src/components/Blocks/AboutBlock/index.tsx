import React from "react";
import { FadeInSection } from "src/components/FadeInSection";
import { SlashSpace } from "../../SlashSpace";
import styles from "./AboutBlock.module.css";

export const AboutBlock = (): JSX.Element => {
  return (
    <section className={styles.container} id="about">
      <FadeInSection>
        <h2 className={styles.mainLine}>Welcome to Kei's page</h2>
        <p>
          I'm a software developer who believes a little idea makes huge impact
          to the world. I love creative solutions and to be inspired by them.
          The moment when my idea turns into reality is the best moment of my
          life!
        </p>
        <p>
          I'm currently located in Vancouver yet always open to any kind of
          opportunity to contribute to software solutions that makes the world
          the better place.
        </p>
        <p>
          Are you looking for somebody who can make something amazing with? You
          are in the right place. Please feel free to email or message me. I
          would love to hear about your idea!
        </p>
      </FadeInSection>
      <SlashSpace />
    </section>
  );
};
