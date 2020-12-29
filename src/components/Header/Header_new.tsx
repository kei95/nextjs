import React from "react";

import * as styles from "./Header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a href={"https://www.google.com/"} className={styles.iconText}>
          Kei's portfolio
        </a>
      </div>
    </div>
  );
};
