import React from "react";
import styles from "./SlashSpace.module.css";

interface SlashSpaceProps {}

export const SlashSpace: React.FC<SlashSpaceProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.slash} />
    </div>
  );
};
