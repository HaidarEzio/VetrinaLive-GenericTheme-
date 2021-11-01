import React from "react";
import { useTheme } from "@material-ui/core/styles";
import * as themes from "Themes/exportTheme";

const Banner = (props) => {
  const { name } = useTheme();
  const { max_discount, shop } = shop || {};
  const { PreviewComponentBanner: View } = themes[name] || {};

  return <View maxDiscount={max_discount} {...props} />;
};

export default Banner;
