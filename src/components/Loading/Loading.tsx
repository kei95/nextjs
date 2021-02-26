import React from "react";
import styles from "./Loading.module.css";
import Image from "next/image";
import { FadeInSection } from "../FadeInSection/FadeInSection";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className={styles.body}>
      <FadeInSection>
        <div className={styles.innerBody}>
          <Image
            src={require("../../../static/img/logo.png")}
            alt="logo"
            width={70}
            height={70}
          />
        </div>
      </FadeInSection>
    </div>
  );
};
