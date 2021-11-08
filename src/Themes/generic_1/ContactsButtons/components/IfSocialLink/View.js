import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CustomButton from "Components/CustomButton";
import { generateUrl, notNull } from "Utils/utils";

const useStyle = makeStyles(() => ({
  button: {
    height: 40,
  },
}));

/*
format:
 - facebook
 - instagram
 */

const View = ({
  link = null,
  children,
  className,
  format,
  backgroundColor,
  title,
}) => {
  const classes = useStyle();
  const theme = useTheme();
  const url = generateUrl({ format, link });

  if (!notNull(link)) {
    return null;
  }

  return (
    <CustomButton
      type="a"
      href={url}
      target="_blank"
      className={clsx(classes.button, className)}
      leftAdornment={children}
      backgroundColor={backgroundColor}
      color={theme.palette.colors.white}
      label={title}
    />
  );
};

export default View;
