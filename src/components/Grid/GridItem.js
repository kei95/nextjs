import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

export default function GridItem(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={"gridItem" + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
