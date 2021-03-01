import Image from "next/image";
import React from "react";
import { Loading } from "../../Loading/Loading";
import styles from "./LandingBlock.module.css";

interface LandingBlockProps {
  isMobile: boolean;
  loading: boolean;
}

export const LandingBlock: React.FC<LandingBlockProps> = ({
  isMobile,
  loading,
}) => {
  return (
    <div className={`${styles.parallax} ${styles.filter}`}>
      <Loading loading={loading} />
      <Image
        src={
          isMobile
            ? "/static/img/profile-mobile.jpg"
            : "/static/img/profile-bg.jpg"
        }
        alt="Landing page image"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority={true}
        loading={"eager"}
      />
      <div className={styles.innerContainer}>
        <div className={`fade-in-section ${!loading ? "is-visible" : ""}`}>
          <div className={styles.line} />
          <h1 className={styles.titleText}>Hello world.</h1>
          <div className={styles.line} />
        </div>
      </div>
    </div>
  );
};
