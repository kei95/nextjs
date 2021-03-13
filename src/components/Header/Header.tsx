import React, { MouseEvent } from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.css";
import { Icon } from "./components/Icon";
import { ThemeSwitch } from "./components/ThemeSwitch";

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
        {/* right side */}
        <div>
          <Icon
            href="https://www.linkedin.com/in/keisuke-yamashita-075164178"
            icon={faLinkedin}
          />
          <Icon href="https://github.com/kei95" icon={faGithub} />
          <Icon href="../../static/img/CV.pdf" icon={faFile} isLastIcon />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
