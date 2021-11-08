import React from "react";

import styles from "../Header.module.css";
import useDarkMode from "use-dark-mode";
import Switch from "react-switch";

export const ThemeSwitch = (): JSX.Element => {
  const isDarkMode = useDarkMode();

  return (
    <div className={styles.switchBody}>
      <Switch
        onChange={isDarkMode.toggle}
        checked={isDarkMode.value}
        onColor={"#363537"}
        offColor={"#363537"}
        checkedIcon={<span className={styles.lightModeIcon}>🌙</span>}
        uncheckedIcon={<span className={styles.darkModeIcon}>🌞</span>}
      />
    </div>
  );
};
