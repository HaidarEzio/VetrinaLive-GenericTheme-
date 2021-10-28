import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackButton from "Components/BackButton";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backBtn: {
    marginBottom: theme.spacing(3),
  },
  hidden: {
    visibility: "hidden",
  },
  title: {
    fontWeight: 500,
    fontSize: 22,
    lineHeight: "27px",
    color: theme.palette.colors.black[1],
  },
}));

function Header(props) {
  const { onReturn, t, _classes = {} } = props;
  const classes = useStyles();
  return (
    <Grid
      classes={{
        ..._classes,
      }}
      container
      alignItems="center"
      justify="space-between"
    >
      <BackButton
        className={classes.backBtn}
        onClick={onReturn}
        label={t("back_to_vetrina")}
      />
      <Typography className={classes.title}>
        {t("promotional_packages")}
      </Typography>
      <BackButton
        className={classes.hidden}
        onClick={onReturn}
        label={t("back_to_vetrina")}
      />
    </Grid>
  );
}

export default Header;
