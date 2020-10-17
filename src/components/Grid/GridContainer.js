import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

export default function GridContainer(props) {
  const { children, justify } = props;
  return (
    <Grid container justify={justify} className="grid">
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.string,
};
