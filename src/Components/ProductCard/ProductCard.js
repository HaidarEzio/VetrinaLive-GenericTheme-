import React, { memo, useMemo } from "react";
import useGetCurrency from "hooks/useGetCurrency";
import useGetMainProductPicture from "hooks/useGetMainProductPicture";
import useCardBody from "./hooks/useCardBody";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";
import useProductCard from "./hooks/useProductCard";

const ProductItem = (props) => {
  const {
    name: productName,
    category,
    pictures,
    video: videos,
    isFeaturedProduct,
    shop,
  } = props;

  const getMainProductPictureHook = useGetMainProductPicture();

  const getMainProductPicture = getMainProductPictureHook({
    pictures,
    videos,
  });

  const {
    currency: { symbol: currencySymbol },
  } = useGetCurrency({ shop });

  const imageUrl = getMainProductPicture["50x50"];

  const { addItem, ...productCard } = useProductCard(props);

  const cardBody = useCardBody({ addItem, imageUrl, ...props });

  const { name } = useTheme();
  const { ProductCard: View } = themes[name] || {};

  const rest = useMemo(
    () => ({
      category,
      getMainProductPicture,
      productName,
      isFeaturedProduct,
      currencySymbol,
      cardBody,
      ...productCard,
      ...props,
    }),
    [
      cardBody,
      category,
      currencySymbol,
      getMainProductPicture,
      isFeaturedProduct,
      productCard,
      productName,
      props,
    ]
  );

  return <View {...rest} />;
};

export default memo(ProductItem);
