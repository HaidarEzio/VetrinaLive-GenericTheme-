import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import useGetCurrency from "hooks/useGetCurrency";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 17,
    lineHeight: "22px",
    color: theme.palette.colors.black[1],
    marginBottom: theme.spacing(1),
  },
  price: {
    textDecoration: "line-through",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "25px",
    color: theme.palette.colors.black[1],
  },
  promoPrice: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "25px",
    color: theme.palette.colors.green.default,
  },
  priceWrapper: {
    marginRight: theme.spacing(5),
  },
}));

function Price(props) {
  const { t, price, promoPrice, _classes = {} } = props;
  const classes = useStyles();
  const {
    currency: { symbol: currencySymbol },
  } = useGetCurrency({ shop });
  return (
    <Grid classes={{ ..._classes }} container alignItems="center">
      <div className={classes.priceWrapper}>
        <Typography className={classes.title}>{t("product_price")}</Typography>
        <Typography className={classes.price}>
          {currencySymbol} {price}
        </Typography>
      </div>

      <div>
        <Typography className={classes.title}>{t("promo_price")}</Typography>
        <Typography className={classes.promoPrice}>
          {currencySymbol} {promoPrice}
        </Typography>
      </div>
    </Grid>
  );
}

export default Price;
