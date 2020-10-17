import React from "react";
import NextLink from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on github"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/kei95"
            target="_blank"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons + " fab fa-github"}
              icon={faGithub}
            />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on LinkedIn"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/keisuke-yamashita-075164178/"
            target="_blank"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons + " fab fa-linkedIn"}
              icon={faLinkedin}
            />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
