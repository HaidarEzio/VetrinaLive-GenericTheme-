import React, { memo, useCallback, useMemo, useRef } from "react";
import getOr from "lodash/fp/getOr";
import Router from "next/router";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";
import ProductCard from "Components/ProductCard";
import useSwipeSlider from "./hooks/useSwipeSlider";

const FeaturedProductsList = (props) => {
  const { deviceType, t, shopKey, featuredProduct } = props;
  const { name } = useTheme();
  const { FeaturedProductsList: View } = themes[name] || {};
  // const featuredProducts = [featuredProduct];
  //! it's an array in the props, and if we put it in array again it won't load
  //! so, just switching names xD
  const featuredProducts = featuredProduct;
  const sliderLength = featuredProducts?.length;

  const add = useCallback(
    (item) => {
      if (item.colors !== "" || item.weights !== "") {
        return Router.push("/[shopKey]/[productKey]", `/${shopKey}/${item.key}`);
      }
    },
    [shopKey]
  );

  const responsive = useMemo(
    () => ({
      desktop: {
        breakpoint: { max: 8000, min: 1280 },
        items: 4,
        slidesToSlide: 4,
      },
      tablet: {
        breakpoint: { max: 1279, min: 600 },
        items: 2,
        draggable: true,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 1,
        draggable: true,
        slidesToSlide: 1,
      },
    }),
    []
  );

  const carousel = useRef(null);
  useSwipeSlider(carousel);

  const onClickCard = useCallback(() => {
    let currentSlide = getOr(null, ["current", "state", "currentSlide"], carousel);
    if (featuredProducts.length > 2 && currentSlide) {
      localStorage.setItem("current-carousel-item", currentSlide);
    }
  }, [featuredProducts]);

  const rest = {
    responsive,
    add,
    deviceType,
    t,
    featuredProducts,
    onClickCard,
    sliderLength,
    carousel,
  };

  if (!sliderLength || sliderLength === 0) return null;

  return <View {...rest} ProductCard={(props) => <ProductCard {...props} />} />;
};

export default memo(FeaturedProductsList);
