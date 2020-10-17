import React from "react";
import PropTypes from "prop-types";
import styles from "./Parallax.module.css";

export default function Parallax(props) {
  const { children, image } = props;
  return (
    <div
      className={`${styles.parallax} ${styles.filter} ${styles.small}`}
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
