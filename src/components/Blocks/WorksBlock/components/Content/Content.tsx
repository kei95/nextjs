import React from "react";
import styles from "../../WorksBlock.module.css";
import { ContentImage } from "./ContentImage/ContentImage";
import { ContentDetails } from "./ContentDetails/ContentDetails";
import { ContentDescriptionProps } from "./types/types";
import { FadeInSection } from "../../../../FadeInSection/FadeInSection";

export const Content: React.FC<ContentDescriptionProps> = ({
  title,
  description,
  stacks,
  isGithubEnabled,
  githubLink,
  appLink,
  iOSLink,
  androidLink,
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
          iOSLink={iOSLink}
          appLink={appLink}
          androidLink={androidLink}
          isLeft={isLeft}
        />
        <ContentImage src={src} isLeft={isLeft} appLink={appLink} />
      </div>
    </FadeInSection>
  );
};
