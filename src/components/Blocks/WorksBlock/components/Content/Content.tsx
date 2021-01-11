import React from "react";
import styles from "../../WorksBlock.module.css";
import { ContentImage } from "./ContentImage/ContentImage";
import { ContentDetails } from "./ContentDetails/ContentDetails";
import { ContentProps } from "./types/types";
import { FadeInSection } from "../../../../FadeInSection/FadeInSection";

export const Content: React.FC<ContentProps> = ({
  title,
  description,
  stacks,
  isGithubEnabled,
  githubLink,
  appLink,
  src,
  isLeft,
}) => {
  return (
    <FadeInSection>
      <div className={styles.workContainer}>
        <ContentDetails
          title={title}
          description={description}
          stacks={stacks}
          isGithubEnabled={isGithubEnabled}
          githubLink={githubLink}
          appLink={appLink}
          isLeft={isLeft}
        />
        <ContentImage src={src} isLeft={isLeft} />
      </div>
    </FadeInSection>
  );
};
