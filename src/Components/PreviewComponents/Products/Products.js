import React, { useMemo } from "react";
// import { useShopProductsContext } from "../../../context/ShopProductsManager/context";
// import useGetProductsList from "../../../hooks/shop/useGetProductsList";
import FullScreenLoader from "../../FullScreenLoader";
import ProductCard from "../../ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";

const useStyles = makeStyles(() => ({
  loadingRoot: {
    height: 390,
    width: "100%",
  },
}));

const Products = ({
  mayFetch,
  limit = 8,
  t,
  children,
  withTitle = true,
  /**hadcoded */
  shop,
  total,
  products,
  hasNextPage: showButton,
  loading,
}) => {
  const classes = useStyles();

  const { id: shopId, key } = shop || {};

  // const { total, products, hasNextPage: showButton } = useShopProductsContext();

  // // get product list
  // const { loading } = useGetProductsList({
  //   shopId,
  //   mayFetch,
  // });

  const props = useMemo(
    () => ({
      withTitle,
      children,
      products,
      showButton: showButton || limit < total,
      limit,
      shopKey: key,
      t,
    }),
    [withTitle, children, limit, products, showButton, key, t, total]
  );

  const { name } = useTheme();
  const { PreviewProducts: View } = themes[name] || {};

  if (loading) {
    return (
      <div className={classes.loadingRoot}>
        <FullScreenLoader />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return null;
  }

  return <View {...props} Card={(props) => <ProductCard {...props} t={t} />} />;
};

export default Products;
