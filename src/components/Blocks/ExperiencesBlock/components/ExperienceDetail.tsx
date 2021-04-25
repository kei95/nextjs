import React from "react";
import styles from "../ExperiencesBlock.module.css";
import { Description } from "./Description";
import { Title } from "./Title";

interface ExperienceDetailProps {
  title: string;
  period: string;
  description: string;
  list: string[];
  isLastItem?: boolean;
}

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  title,
  period,
  description,
  list,
  isLastItem,
}) => {
  return (
    <div
      className={
        isLastItem
          ? styles.experienceDetailBodyListItem
          : styles.experienceDetailBody
      }
    >
      <Title title={title} period={period} />
      <Description description={description} list={list} />
    </div>
  );
};
