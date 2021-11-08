import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, useMediaQuery } from "@material-ui/core";
import Container from "Components/Container";

const useStyles = makeStyles((theme) => ({
  topBanner: {
    minHeight: 40,
    fontSize: 14,
    padding: "0 20px",
    lineHeight: "20px",
    color: theme.palette.colors.white,
    backgroundColor: theme.palette.secondary.main,
  },
  topBannerText: ({ hasChildren }) => ({
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 700,
    padding: "10px 0",
    whiteSpace: "wrap",
    margin: hasChildren ? 0 : "0px auto",
    textAlign: "center",
    width: "60%",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "100%",
      maxWidth: "100%",
    },
  }),
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}));

const TopBanner = ({ customClasses, topBarEnabled, topBanner, children }) => {
  const classes = useStyles({ hasChildren: Boolean(children) });
  const theme = useTheme();
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(topBanner.message);
  //! topbanner message getting logged, but not displayed
  return (
    <div className={clsx(classes.topBanner, customClasses?.topBanner)}>
      <Container className={classes.container}>
        <Grid container alignItems="center" justifyContent="space-between" wrap="nowrap">
          {topBarEnabled ? (
            <Typography className={clsx(classes.topBannerText, customClasses?.topBannerText)}>{topBanner?.message}</Typography>
          ) : (
            <div />
          )}
          {!breakpointsDownSm && children}
        </Grid>
      </Container>
    </div>
  );
};

export default TopBanner;
