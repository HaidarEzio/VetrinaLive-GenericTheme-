import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import ChangeLanguageMenu from "Components/ChangeLanguageMenu";
import ActionBar from "Components/ActionBar/ActionBar";
import NewNavigation from "ReusableThemes/NewNavigation";
import TopBanner from "ReusableThemes/TopBanner";
import Header from "ReusableThemes/Header";
import ReusableContactsButtons from "ReusableThemes/ReusableContactsButtons/ReusableContactsButtons";
import { TOP_BAR_Z_INDEX } from "Utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    zIndex: TOP_BAR_Z_INDEX,
    position: "sticky",
  },
  title: {
    marginLeft: 16,
    fontFamily: "Source Sans Pro Regular, sans serif",
    "& span": {
      textTransform: "uppercase",
    },
    color: theme.palette.secondary.main,
  },
  button: {
    marginLeft: 16,
    textTransform: "none",
    color: theme.palette.colors.white,
  },
  navigationRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
  navigationButton: {
    padding: "2px 12px",
  },
  navigationButtonLabel: {
    fontFamily: "Source Sans Pro Regular, sans serif",
    color: theme.palette.colors.white,
    pointerEvents: "none",
  },
  navigationButtonActive: {
    fontFamily: "Source Sans Pro Black, sans serif",
    color: theme.palette.colors.neutral[100],
  },
  actionsButton: {
    marginRight: 14,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginRight: 24,
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  info: {
    maxWidth: "40%",
    fontFamily: "Source Sans Pro Regular, sans serif",
    [theme.breakpoints.down(1275)]: {
      maxWidth: "50%",
      justifyContent: "flex-start",
    },
  },
  topBannerText: {
    textAlign: "start",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  topBanner: {
    backgroundColor: "white",
  },
  text: {
    fontFamily: "SourceSansPro, sans serif",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}));

const View = ({ t, logoUrl, className, topBanner, topBarEnabled, shop, mayFetch, returnToVetrina, toggleAccountModal, toggleNavigation }) => {
  const { currency, instagram_url, facebook_url, phone, whatsapp_number } = shop || {};
  const classes = useStyles();
  const theme = useTheme();
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const hideTopBar = !topBarEnabled && breakpointsDownSm;
  const iconColor = "#829199";
  return (
    <>
      {!hideTopBar && (
        <TopBanner
          topBarEnabled={topBarEnabled}
          topBanner={topBanner}
          customClasses={{
            topBannerText: classes.topBannerText,
            topBanner: classes.topBanner,
          }}
        >
          <Grid container alignItems="flex-start">
            <Typography className={classes.text}> {topBanner.message}</Typography>
          </Grid>

          <Grid className={classes.info} container alignItems="center" justify="flex-end">
            <ChangeLanguageMenu t={t} color={theme.palette.secondary.main} />
            {currency && (
              <Typography className={classes.title}>
                {t("currency")} : <span>{currency}</span>
              </Typography>
            )}
            <ReusableContactsButtons
              phoneNumber={phone}
              instagram_url={instagram_url}
              whatsapp_number={whatsapp_number}
              facebook_url={facebook_url}
              iconColor={iconColor}
            />
          </Grid>
        </TopBanner>
      )}
      <header className={classes.root}>
        <Header customClasses={{ header: className }} logoUrl={logoUrl}>
          <NewNavigation
            returnToVetrina={returnToVetrina}
            t={t}
            customClasses={{
              root: classes.navigationRoot,
              button: classes.navigationButton,
              label: classes.navigationButtonLabel,
              active: classes.navigationButtonActive,
            }}
          />
          <ActionBar
            t={t}
            mayFetch={mayFetch}
            toggleNavigation={toggleNavigation}
            toggleAccountModal={toggleAccountModal}
            customClasses={{
              buttons: classes.actionsButton,
            }}
          />
        </Header>
      </header>
    </>
  );
};

export default View;
