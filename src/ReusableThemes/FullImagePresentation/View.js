import React, { memo } from "react";
import isEmpty from "lodash/fp/isEmpty";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ReusableAdditionalInfo from "../ReusableAdditionalInfo";
import CustomButton from "Components/CustomButton";
import Image from "next/image"; //displaying the image using next/image

const useStyles = makeStyles((theme) => ({
  shopPresentationRoot: ({ url }) => ({
    minHeight: 550,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    marginBottom: 140,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 200,
    },
  }),
  generalInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "90vh",
    },
  },
  title: theme.title({
    maxWidth: 700,
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 16,
    wordWrap: "break-word",
    color: theme.palette.colors.white,
  }),
  description: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
    maxWidth: 545,
    width: "100%",
  },
  //* took too much time on this, got the code from one of the other branches
  circleShape: {
    height: 80,
    width: 80,
    border: `3px solid #DE0446`,
    borderRadius: "50%",
    backgroundColor: theme.palette.colors.whiteish,
  },
  //* took too much time on this, got the code from one of the other branches
}));

const View = (props) => {
  const { shop, IsOnlineModal, getShopBanner, t, _classes, showDescription = true, showButton = false, iconColor, circleLogo } = props;
  const { name: shopName, banner_url: bannerUrl, category, key, description } = shop || {};
  const url = isEmpty(bannerUrl) ? getShopBanner(category) : bannerUrl;
  const classes = useStyles({ url });
  return (
    <section className={clsx(classes.shopPresentationRoot, _classes?.shopPresentationRoot)}>
      {IsOnlineModal}
      <Grid container justify="center" alignItems="center" className={clsx(classes.generalInfo, _classes?.generalInfo)}>
        <Typography variant="h1" className={clsx(classes.title, _classes?.title)}>
          {shopName}
        </Typography>
        {showDescription && (
          <Typography variant="subtitle1" className={clsx(classes.description, _classes?.description)}>
            {description}
          </Typography>
        )}
        {/* small story-like circle*/}
        {circleLogo && <div className={clsx(classes.circleShape, _classes?.circleShape)}></div>}
        {showButton && <CustomButton type="link" href="/[shopKey]/products" as={`/${key}/products`} label={t("view_shop")} />}
      </Grid>
      <ReusableAdditionalInfo iconColor={iconColor} customClasses={_classes} shop={shop} t={t} />
    </section>
  );
};

export default memo(View);
