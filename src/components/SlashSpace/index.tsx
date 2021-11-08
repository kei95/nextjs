import React from "react";
import styles from "./SlashSpace.module.css";

export const SlashSpace = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.slash} />
    </div>
  );
};
