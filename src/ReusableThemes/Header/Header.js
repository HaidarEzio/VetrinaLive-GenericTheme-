import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LogoSvg from "Components/Logo/svg";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    minHeight: 55,
    display: "flex",
    padding: "15px 0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.colors.white,
    [theme.breakpoints.down("sm")]: {
      padding: "10px 15px",
    },
  },
  container: theme.container({
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  }),
  logo: {
    width: 113,
  },
  customerLogo: {
    maxHeight: 50,
    maxWidth: "70%",
    borderRadius: 5,
    objectFit: "contain",
  },
}));

const Header = ({ customClasses, logoUrl, children }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.header, customClasses?.header)}>
      <Grid
        container
        justify="space-between"
        className={clsx(classes.container, customClasses?.container)}
        wrap="nowrap"
      >
        {logoUrl ? (
          <img
            src={logoUrl}
            alt="logo"
            className={clsx(classes.customerLogo, customClasses?.customerLogo)}
          />
        ) : (
          <LogoSvg className={clsx(classes.logo, customClasses?.logo)} />
        )}
        {children}
      </Grid>
    </div>
  );
};

export default Header;
