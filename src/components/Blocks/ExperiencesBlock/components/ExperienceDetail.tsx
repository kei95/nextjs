import React from "react";
import styles from "../ExperiencesBlock.module.css";
import { Description } from "./Description";
import { Title } from "./Title";

interface ExperienceDetailProps {
  title: string;
  period: string;
  description: string;
  tools: string[];
  list: string[];
  isLastItem?: boolean;
}

export const ExperienceDetail = ({
  title,
  period,
  description,
  tools,
  list,
  isLastItem,
}: ExperienceDetailProps): JSX.Element => {
  return (
    <div
      className={
        isLastItem
          ? styles.experienceDetailBodyListItem
          : styles.experienceDetailBody
      }
    >
      <Title title={title} period={period} />
      <Description description={description} tools={tools} list={list} />
    </div>
  );
};
