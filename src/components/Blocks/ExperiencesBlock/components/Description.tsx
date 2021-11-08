import React from "react";
import styles from "../ExperiencesBlock.module.css";

interface DescriptionProps {
  description: string;
  tools: string[];
  list: string[];
}

export const Description = ({
  description,
  tools,
  list,
}: DescriptionProps): JSX.Element => {
  // list for work summery
  const listItem = list.map(
    (
      item,
      idx
    ): React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    > => <li key={`description_${idx}`}>{item}</li>
  );

  // List for tools
  const toolListItem = tools.map(
    (
      item,
      idx
    ): React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    > => {
      const isLastItem = idx === tools.length - 1;
      return (
        <li className={styles.toolListItem} key={`tools_${idx}`}>
          {isLastItem ? `${item} etc.` : `${item},`}
        </li>
      );
    }
  );

  return (
    <>
      <p className={styles.workDescription}>{description}</p>
      <ul className={styles.list}>{listItem}</ul>
      <ul className={styles.toolList}>
        <span className={styles.listTitle}>Tools:</span>
        {toolListItem}
      </ul>
    </>
  );
};
