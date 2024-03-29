import React from "react";
import styles from "../../../WorksBlock.module.css";
import { ContentDetailsProps } from "../types/types";
import {
  faGithub,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import useDarkMode from "use-dark-mode";
config.autoAddCss = false;

export const ContentDetails = ({
  title,
  description,
  stacks,
  githubLink,
  appLink,
  iOSLink,
  androidLink,
  isLeft,
}: ContentDetailsProps): JSX.Element => {
  const isDarkMode = useDarkMode();
  return (
    <div className={isLeft ? styles.contentLeft : styles.content}>
      <p className={styles.title}>{title}</p>
      <div
        className={
          isDarkMode.value
            ? styles.descriptionBoxDarkMode
            : styles.descriptionBox
        }
      >
        <span>{description}</span>
      </div>
      <div>
        <span>{stacks}</span>
      </div>
      <div>
        {githubLink && (
          <a target="_blank" href={githubLink} className={styles.iconLeft}>
            <FontAwesomeIcon
              size="lg"
              icon={faGithub}
              color={isDarkMode.value ? "#fff" : "#444444"}
            />
          </a>
        )}
        {iOSLink && (
          <a target="_blank" href={iOSLink} className={styles.iconLeft}>
            <FontAwesomeIcon
              size="lg"
              icon={faApple}
              color={isDarkMode.value ? "#fff" : "#444444"}
            />
          </a>
        )}
        {androidLink && (
          <a target="_blank" href={androidLink} className={styles.iconLeft}>
            <FontAwesomeIcon
              size="lg"
              icon={faAndroid}
              color={isDarkMode.value ? "#fff" : "#444444"}
            />
          </a>
        )}
        {appLink && (
          <a target="_blank" href={appLink} className={styles.icon}>
            <FontAwesomeIcon
              size="lg"
              icon={faExternalLinkAlt}
              color={isDarkMode.value ? "#fff" : "#444444"}
            />
          </a>
        )}
      </div>
    </div>
  );
};
