import React from "react";
import Image from "next/image";
import styles from "../../../WorksBlock.module.css";
import { ContentImageProps } from "../types/types";

export const ContentImage: React.FC<ContentImageProps> = ({ src, isLeft }) => {
  return (
    <div className={isLeft ? styles.imageLeft : styles.image}>
      <Image
        src={src}
        alt="Picture of the author"
        width={700}
        height={450}
        className={styles.imageInner}
      />
    </div>
  );
};
