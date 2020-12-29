import React, { MouseEvent } from "react";

import * as styles from "./Header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const onClickHeaderTitle = (event: MouseEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a onClick={onClickHeaderTitle} className={styles.iconText}>
          Kei's portfolio
        </a>
      </div>
    </div>
  );
};
