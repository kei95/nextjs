import React from "react";

import styles from "../Header.module.css";
import useDarkMode from "use-dark-mode";
import Switch from "react-switch";

interface ThemeSwitchProps {}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({}) => {
  const isDarkMode = useDarkMode();

  return (
    <div className={styles.switchBody}>
      <Switch
        onChange={isDarkMode.toggle}
        checked={isDarkMode.value}
        onColor={"#363537"}
        offColor={"#F4F1DE"}
        checkedIcon={<span className={styles.lightModeIcon}>🌙</span>}
        uncheckedIcon={<span className={styles.darkModeIcon}>🌞</span>}
      />
    </div>
  );
};
