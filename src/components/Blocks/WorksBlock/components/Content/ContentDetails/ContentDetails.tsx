import React from "react";
import styles from "../../../WorksBlock.module.css";
import { ContentDescriptionProps } from "../types/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContentDetails: React.FC<ContentDescriptionProps> = ({
  title,
  description,
  stacks,
  githubLink,
  appLink,
  isLeft,
}) => {
  return (
    <div className={isLeft ? styles.contentLeft : styles.content}>
      <p className={styles.title}>{title}</p>
      <div className={styles.descriptionBox}>
        <span>{description}</span>
      </div>
      <div>
        <span>{stacks}</span>
      </div>
      <div>
        {githubLink && (
          <a target="_blank" href={githubLink} className={styles.iconLeft}>
            <FontAwesomeIcon size="lg" icon={faGithub} color="#444444" />
          </a>
        )}
        <a target="_blank" href={appLink} className={styles.icon}>
          <FontAwesomeIcon size="lg" icon={faExternalLinkAlt} color="#444444" />
        </a>
      </div>
    </div>
  );
};
