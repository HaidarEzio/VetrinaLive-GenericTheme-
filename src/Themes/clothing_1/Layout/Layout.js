import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShopHeader from "Components/ShopHeader";
import ShopPresentation from "Components/ShopPresentation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.page,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { shop, t } = props;
  return (
    <div className={classes.root}>
      <ShopHeader {...props} />
      <main className={classes.main}>
        <ShopPresentation shop={shop} t={t} />
      </main>
    </div>
  );
};

export default Layout;