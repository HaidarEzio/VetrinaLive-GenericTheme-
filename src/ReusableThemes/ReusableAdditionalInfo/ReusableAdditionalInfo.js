import React from "react";
import clsx from "clsx";
import { capitalize } from "lodash/string";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PaymentsMethodsIcon from "Icons/PaymentsMethodsIcon";
import CategoriesIcon from "Icons/CategoriesIcon";
import ShippingIcon from "Icons/ShippingIcon";

const useStyles = makeStyles((theme) => ({
  additionalInfo: {
    padding: "24px 0",
    zIndex: 4,
    width: "100%",
    maxWidth: 940,
    margin: "0px auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      transform: "translateY(0%)",
    },
  },
  additionalInfoItem: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: 13,
    },
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    width: 20,
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
  infoTitle: {
    marginBottom: 4,
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "initial",
    },
  },
}));

const AdditionalInfo = ({ shop, t, customClasses, iconColor }) => {
  const classes = useStyles();
  const {
    categories = ["1", "2", "3"],
    payments = [
      { is_enabled: true, name: "wffe" },
      { is_enabled: true, name: "wffe" },
      { is_enabled: true, name: "wffe" },
    ],
    delivery_options = [
      { is_enabled: true, name: "wffe" },
      { is_enabled: true, name: "wffe" },
      { is_enabled: true, name: "wffe" },
    ],
  } = shop || {};

  const paymentsActive =
    payments &&
    Object.entries(payments)
      .filter(([k, v]) => v.is_enabled)
      ?.map(([k]) => {
        if (k.includes("_")) {
          k = k.replace("_", " ");
        }
        return capitalize(k);
      })
      ?.join(", ");

  const deliveryActive = delivery_options
    .filter((item) => item.is_enabled)
    ?.map((item) => item.name)
    ?.join(", ");

  const categoriesLength = categories?.length;

  const additionalInfo = [
    paymentsActive && {
      title: t("method_payment"),
      text: paymentsActive,
      icon: <PaymentsMethodsIcon color={iconColor} />,
    },
    deliveryActive && {
      title: t("shipping"),
      text: deliveryActive,
      icon: <ShippingIcon color={iconColor} />,
    },
    categoriesLength > 0 && {
      title: t("category"),
      text: `${categoriesLength} ${t("categories_available")}`,
      icon: <CategoriesIcon color={iconColor} />,
    },
  ].filter(Boolean);

  if (additionalInfo?.length === 0) return null;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={clsx(classes.additionalInfo, customClasses?.additionalInfo)}
    >
      {additionalInfo.map(({ icon, title, text }, index) => (
        <Grid
          key={index}
          item
          xs={12}
          md={4}
          className={clsx(
            classes.additionalInfoItem,
            customClasses?.additionalInfoItem
          )}
        >
          {icon}
          <div className={clsx(classes.textBlock, customClasses?.textBlock)}>
            <Typography
              className={clsx(classes.infoTitle, customClasses?.infoTitle)}
            >
              {title}
            </Typography>
            <Typography
              className={clsx(classes.text, customClasses?.text)}
              noWrap
            >
              {text}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdditionalInfo;
