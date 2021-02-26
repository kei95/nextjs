import Image from "next/image";
import React from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import styles from "./LandingBlock.module.css";

interface LandingBlockProps {
  isMobile: boolean;
}

export const LandingBlock: React.FC<LandingBlockProps> = ({ isMobile }) => {
  return (
    <div className={`${styles.parallax} ${styles.filter}`}>
      <Image
        src={
          isMobile
            ? "/static/img/profile-mobile.jpg"
            : "/static/img/profile-bg.jpg"
        }
        alt="Landing page image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        loading={"eager"}
      />
      <div className={styles.innerContainer}>
        <FadeInSection>
          <div className={styles.line} />
          <h1 className={styles.titleText}>Hello world.</h1>
          <div className={styles.line} />
        </FadeInSection>
      </div>
    </div>
  );
};
