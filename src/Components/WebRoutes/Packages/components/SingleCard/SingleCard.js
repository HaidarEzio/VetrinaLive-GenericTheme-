import React, { useMemo } from "react";
import { useTheme } from "@material-ui/core/styles";
import get from "lodash/fp/get";
import getOr from "lodash/fp/getOr";
import noPreview from "public/imgs/nopreview.png";
import * as themes from "Themes/exportTheme";

function SingleCard(props) {
  const { promoPackage, width } = props;
  const products = getOr([], "products", promoPackage);
  const pictureUrl = get("picture_url", promoPackage);
  const promoPackageName = get("name", promoPackage);

  const maxPicsInGrid = 4;
  const picHeight = 175;

  const height = useMemo(() => {
    return products.length > 1
      ? [`${picHeight}px`, `${picHeight}px`]
      : [`${picHeight * 2}px`];
  }, [products.length]);

  const layout = useMemo(() => {
    switch (products.length) {
      case 1:
        return [1];
      case 2:
        return [1, 1];
      case 3:
        return [1, 2];
      default:
        return [2, 2];
    }
  }, [products.length]);

  const settings = useMemo(() => {
    return {
      width,
      height,
      layout,
      photos: products.map((p) => {
        const src = getOr(noPreview, "1000x1200", p.pictures[0]);
        return {
          src,
        };
      }),
      showNumOfRemainingPhotos: products.length > maxPicsInGrid,
    };
  }, [height, layout, products, width]);

  const { name } = useTheme();
  const { PromoPackageCard: View } = themes[name] || {};

  const rest = useMemo(
    () => ({
      settings,
      products,
      pictureUrl,
      promoPackageName,
      picHeight,
      ...props,
    }),
    [settings, products, pictureUrl, promoPackageName, props]
  );

  return <View {...rest} />;
}

export default SingleCard;
