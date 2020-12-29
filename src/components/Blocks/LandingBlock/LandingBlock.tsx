import React from "react";
import * as styles from "./LandingBlock.module.css";

interface LandingBlockProps {}

export const LandingBlock: React.FC<LandingBlockProps> = ({}) => {
  return (
    <div
      className={`${styles.parallax} ${styles.filter}`}
      style={{
        backgroundImage: "url(../static/img/profile-bg.jpg)",
      }}
    >
      <div className={styles.innerContainer}>
        <div className={styles.line} />
        <h1 className={styles.titleText}>Take you to wherever you wanna go.</h1>
        <div className={styles.line} />
      </div>
    </div>
  );
};
