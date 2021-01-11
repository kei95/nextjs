import React from "react";
import styles from "./Cards.module.css";

interface CardProps {
  title: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ title, paragraph }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.titleText}>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export const Cards: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card
        title="Fast"
        paragraph="Thank to WordPress, it allows him to create a beautiful website without too much lines of codes… which means it’s faster!"
      />
      <Card
        title="Clean"
        paragraph="He is a detail oriented person. Which means he will provide you clean and readable website for you!(Again thank to WordPress)"
      />
      <Card
        title="Affordable"
        paragraph="He would like to take an offer for cheaper price than other professionals, since he top priority is to gain confidence and skill."
      />
    </div>
  );
};
