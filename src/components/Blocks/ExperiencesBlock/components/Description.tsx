import React from "react";
import styles from "../ExperiencesBlock.module.css";

interface DescriptionProps {
  description: string;
  list: string[];
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  list,
}) => {
  const listItem = list.map(
    (
      item,
      idx
    ): React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    > => <li key={`description_${idx}`}>{item}</li>
  );
  return (
    <>
      <p className={styles.workDescription}>{description}</p>
      <ul className={styles.list}>{listItem}</ul>
    </>
  );
};
