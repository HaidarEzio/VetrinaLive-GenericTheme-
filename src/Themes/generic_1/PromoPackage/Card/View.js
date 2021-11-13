import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PromoPackagesCard from "ReusableThemes/ReusablePromoPackage/Card/ViewNew";
import useIsMobile from "hooks/useIsMobile";
import CardDescription from "ReusableThemes/ReusablePromoPackage/Card/components/CardDescription";
import CardTitleView from "ReusableThemes/ReusablePromoPackage/Card/components/CardTitle/CardTitle";
import CardButton from "ReusableThemes/ReusablePromoPackage/Card/components/CardButton";
import CardPictures from "ReusableThemes/ReusablePromoPackage/Card/components/CardPictures/CardPictures";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(3),
    background: theme.palette.colors.white,
    display: "flex",
    width: 558,
    maxWidth: 558,
    boxShadow: theme.palette.shadows.card,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      maxWidth: "90%",
    },
    [theme.breakpoints.down(390)]: {
      padding: theme.spacing(1),
    },
  },
  item: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 15,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  picturesRoot: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
  picture: ({ productsNumber }) => ({
    width: productsNumber ? "100%" : 165,
    height: 204,
    margin: "0 2px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      height: 199,
    },
    [theme.breakpoints.down(390)]: {
      width: 150,
    },
  }),
  title: theme.title({
    fontSize: 36,
    lineHeight: "41px",
    color: theme.palette.colors.neutral.black[80],
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    whiteSpace: "normal",
  }),
  description: {
    fontSize: 25,
    fontFamily: "Ubuntu, sans serif",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  btn: {
    width: "100%",
  },
  pics: { width: "66%" },
}));

const View = (props) => {
  const { promoPackage, shopKey, products, t } = props;
  const isMobile = useIsMobile();
  const filteredProducts = products.slice(0, 4);
  const classes = useStyles({
    isMobile,
    productsNumber: filteredProducts.length,
  });
  const theme = useTheme();

  return (
    <PromoPackagesCard
      sm={6}
      _classes={{
        card: classes.card,
      }}
    >
      <>
        <div className={classes.item}>
          <CardTitleView title={promoPackage.name} className={classes.title} />
          <CardButton
            backgroundColor={theme.palette.primary.main}
            shopKey={shopKey}
            className={classes.btn}
            t={t}
            label="Explore"
            promoPackageId={promoPackage.id}
          />
        </div>
        <div className={classes.pics}>
          <CardDescription description={promoPackage.description} className={classes.description} />
          <CardPictures filteredProducts={filteredProducts} picturesClassName={classes.picturesRoot} pictureClassName={classes.picture} />
        </div>
      </>
    </PromoPackagesCard>
  );
};

export default View;
