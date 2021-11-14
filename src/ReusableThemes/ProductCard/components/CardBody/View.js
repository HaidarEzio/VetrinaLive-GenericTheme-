import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment, memo, useMemo } from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { sliceDescription } from "Utils/utils";
import Actions from "./components/Actions";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: "12px 0 0",
    "&:last-child": {
      paddingBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  title: theme.title({
    fontSize: 22,
    lineHeight: "24px",
    color: theme.palette.colors.neutral.black,
  }),
  description: {
    fontSize: 16,
    lineHeight: "22px",
    margin: "4px 0 10px",
    color: theme.palette.colors.neutral[2],
  },
  price: {
    fontSize: 20,
    lineHeight: "24px",
    color: theme.palette.colors.neutral.black,
  },
  withDiscount: ({ discountPriceColor }) => ({
    width: "fit-content",
    marginLeft: 4,
    fontSize: "13px !important",
    lineHeight: "20px !important",
    textDecorationLine: "line-through",
    color: `${discountPriceColor} !important`,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "24px",
    },
  }),
  priceContainer: {
    flex: 1,
  },
}));

function CardBody(props) {
  const {
    t,
    name,
    price,
    quantity,
    variants,
    titleRef,
    _classes,
    _description,
    withDiscount,
    addItemToCart,
    currencySymbol,
    cheapestVariant,
    openSingleProdPage,
    isFeaturedProduct = false,
    hideDescription,
    showAddToCartButton = true,
    productVariationsFeature,
    discountPriceColor,
    showPrefix,
    priceAndButtonInline,
    buttonWithText = true,
    hasDiffVariationsPrices,
  } = props;

  const classes = useStyles({ isFeaturedProduct, discountPriceColor });

  const buttonProps = useMemo(
    () => ({
      quantity,
      variants,
      addItemToCart,
      openSingleProdPage,
      productVariationsFeature,
      _classes,
      buttonWithText,
    }),
    [quantity, variants, addItemToCart, openSingleProdPage, productVariationsFeature, _classes, buttonWithText]
  );

  const PriceAndButtonWrapper = ({ children }) => {
    return (
      <Grid container className={_classes?.priceAndButton} justify="space-between">
        {children}
      </Grid>
    );
  };

  const PriceButtonContainer = useMemo(() => {
    return priceAndButtonInline ? PriceAndButtonWrapper : Fragment;
  }, [PriceAndButtonWrapper, priceAndButtonInline]);

  const Pricetag = memo(({ price, discount, prefix }) => {
    return (
      <React.Fragment>
        {discount > 0 && (
          <Typography component="p" className={clsx(classes.price, _classes?.price)}>
            {" "}
            {showPrefix ? prefix : ""}
            {currencySymbol} {parseFloat(discount).toFixed(2)}
          </Typography>
        )}
        <Typography
          className={clsx(classes.price, _classes?.price, {
            [classes.withDiscount]: discount,
          })}
        >
          {showPrefix ? prefix : ""}
          {currencySymbol}
          {parseFloat(price).toFixed(2)}
        </Typography>
      </React.Fragment>
    );
  });

  return (
    <CardContent className={clsx(classes.cardContent, _classes?.cardContent)}>
      <Typography ref={titleRef} className={clsx(classes.title, _classes?.title)} variant="h3">
        {name}
      </Typography>
      {!hideDescription && <Typography className={clsx(classes.description, _classes?.description)}>{sliceDescription(_description, 60)}</Typography>}
      <PriceButtonContainer>
        <Grid container wrap="nowrap" alignItems="flex-end" className={clsx(classes.priceContainer, _classes?.priceContainer)}>
          {isEmpty(cheapestVariant) ? (
            <Pricetag price={price} discount={withDiscount} />
          ) : (
            <Pricetag
              price={cheapestVariant.combination_price}
              discount={cheapestVariant.combination_discount}
              prefix={hasDiffVariationsPrices ? t("from") + " " : ""}
            />
          )}
        </Grid>
        {showAddToCartButton && <Actions {...buttonProps} t={t} />}
      </PriceButtonContainer>
    </CardContent>
  );
}

export default memo(CardBody);
