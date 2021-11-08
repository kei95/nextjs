import React from "react";
import Image from "next/image";
import styles from "../../../WorksBlock.module.css";
import { ContentImageProps } from "../types/types";

export const ContentImage = ({
  src,
  isLeft,
  appLink,
}: ContentImageProps): JSX.Element => {
  return (
    <a
      target="_blank"
      href={appLink}
      className={isLeft ? `${styles.imageLeft}` : `${styles.image} `}
    >
      <Image
        src={src}
        alt="Picture of the work"
        width={700}
        height={450}
        className={styles.imageInner}
      />
    </a>
  );
};
