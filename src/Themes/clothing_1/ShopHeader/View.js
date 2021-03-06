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
    fontWeight: 400,
    "& span": {
      textTransform: "uppercase",
    },
  },
  button: {
    marginLeft: 16,
    textTransform: "none",
    color: theme.palette.colors.white,
  },
  navigationRoot: {
    borderTop: `1px solid ${theme.palette.colors.neutral[20]}`,
  },
  navigationButton: {
    padding: "2px 12px",
  },
  navigationButtonLabel: {
    pointerEvents: "none",
    color: theme.palette.colors.neutral[100],
  },
  navigationButtonActive: {
    color: theme.palette.colors.neutral[100],
  },
  actionsButton: {
    marginRight: 14,
    padding: 10,
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
}));

const View = ({
  t,
  logoUrl,
  className,
  topBanner,
  topBarEnabled,
  shop,
  mayFetch,
  returnToVetrina,
  toggleAccountModal,
  toggleNavigation,
}) => {
  const { currency, instagram_url, facebook_url, phone, whatsapp_number } =
    shop || {};
  const classes = useStyles();
  const theme = useTheme();
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const hideTopBar = !topBarEnabled && breakpointsDownSm;

  return (
    <>
      {!hideTopBar && (
        <TopBanner
          topBarEnabled={topBarEnabled}
          topBanner={topBanner}
          customClasses={{
            topBannerText: classes.topBannerText,
          }}
        >
          <Grid
            className={classes.info}
            container
            alignItems="center"
            justify="flex-end"
          >
            <ChangeLanguageMenu t={t} color={theme.palette.colors.white} />
            {currency && (
              <Typography className={classes.title}>
                {t("currency")} : <span>{currency}</span>
              </Typography>
            )}
            <ReusableContactsButtons
              phoneNumber={phone}
              whatsapp_number={whatsapp_number}
              instagram_url={instagram_url}
              facebook_url={facebook_url}
            />
          </Grid>
        </TopBanner>
      )}
      <header className={classes.root}>
        <Header customClasses={{ header: className }} logoUrl={logoUrl}>
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
      </header>
    </>
  );
};

export default View;
