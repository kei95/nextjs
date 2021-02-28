import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../Header.module.css";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
  icon: IconDefinition;
  href: string;
  isLastIcon?: boolean;
}

export const Icon: React.FC<IconProps> = ({ icon, href, isLastIcon }) => {
  return (
    <a
      target="_blank"
      href={href}
      className={isLastIcon ? undefined : styles.icon}
    >
      <FontAwesomeIcon target="_blank" size="lg" icon={icon} color="#ffffff" />
    </a>
  );
};
