import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.page,
  },
  main: {
    flex: 1,
    overflow: "hidden",
  }
}));

const Layout = (props) => {
  const classes = useStyles();
  return <h1>Generic theme</h1>;
};

Layout.defaultProps = {};

export default Layout;
