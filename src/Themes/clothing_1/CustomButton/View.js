import React from "react";
import { useTheme } from "@material-ui/styles";
import ReusableCustomButton from "ReusableThemes/ReusableCustomButton";

const View = (props) => {
  const theme = useTheme();
  const {
    boxShadow = undefined,
    backgroundColor = theme.palette.primary.main,
    height = 50,
    borderRadius = 0,
    color = "white",
    ...restProps
  } = props;
  return (
    <ReusableCustomButton
      boxShadow={boxShadow}
      backgroundColor={backgroundColor}
      height={height}
      borderRadius={borderRadius}
      color={color}
      {...restProps}
    />
  );
};

export default View;
