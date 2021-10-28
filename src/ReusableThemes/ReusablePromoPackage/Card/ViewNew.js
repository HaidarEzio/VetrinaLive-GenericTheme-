import React from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const View = ({ children, _classes }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      justify="center"
      sm={12}
      lg={6}
      className={clsx(classes.root, _classes?.root)}
    >
      <div className={clsx(classes.card, _classes?.card)}>{children}</div>
    </Grid>
  );
};

export default View;
