import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Products from "ReusableThemes/PreviewComponents/Products";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: 36,
  },
  grid: {},
  card: {},
  button: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const View = (props) => {
  const classes = useStyles();
  return (
    <Products
      {...props}
      customClasses={{
        root: classes.root,
        title: classes.title,
        grid: classes.grid,
        card: classes.card,
        button: classes.button,
      }}
    />
  );
};

export default View;
