import React from "react";
import styles from "../ExperiencesBlock.module.css";

interface TitleProps {
  title: string;
  period: string;
}

export const Title = ({ title, period }: TitleProps): JSX.Element => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{period}</p>
    </div>
  );
};
