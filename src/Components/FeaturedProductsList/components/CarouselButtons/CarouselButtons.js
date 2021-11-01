import React from "react";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";

const CarouselButtons = (props) => {
  const { name } = useTheme();
  const { CarouselButtons: View } = themes[name] || {};

  return <View {...props} />;
};

export default CarouselButtons;
