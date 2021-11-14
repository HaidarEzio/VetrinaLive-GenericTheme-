import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "ReusableThemes/ProductCard";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 40,
  },
  description: {},
  cardRoot: {
    alignItems: "flex-start",
  },
  priceContainer: {
    flexDirection: "column-reverse",
    alignItems: "flex-start",

    marginBottom: 10,
  },
  price: {
    fontFamily: "Source Sans Pro Black, sans-serif",
  },
  buttonRoot: {
    width: "auto",
    padding: "0px 28px",
  },
  discountRoot: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const View = (props) => {
  const classes = useStyles();
  return (
    <ProductCard
      showPrefix
      _classes={{
        title: classes.title,
        description: classes.description,
        cardRoot: classes.cardRoot,
        priceContainer: classes.priceContainer,
        buttonRoot: classes.buttonRoot,
        price: classes.price,
        discountRoot: classes.discountRoot,
      }}
      {...props}
    />
  );
};

export default View;
