import React, { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import Image from "next/image";

interface LoadingProps {
  loading: boolean;
}

export const Loading: React.FC<LoadingProps> = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 100);
  }, []);
  return (
    <div className={styles.body}>
      <div className={`fade-in-section ${showLogo ? "is-visible" : ""}`}>
        <div className={styles.innerBody}>
          <Image
            src={require("../../../static/img/logo.png")}
            alt="logo"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
};
