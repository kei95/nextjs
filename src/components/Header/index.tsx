import React from "react";
import { HashLink } from "react-router-hash-link";

// icons
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// style
import styles from "./Header.module.css";

// components
import { Icon } from "./components/Icon";
import { ThemeSwitch } from "./components/ThemeSwitch";

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HashLink
          smooth
          to={"/#landing"}
          // onClick={onClickHeaderTitle}
          className={styles.iconText}
        >
          Kei's portfolio
        </HashLink>
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
