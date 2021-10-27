import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { generateUrl, notNull } from "Utils/utils";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyle = makeStyles(() => ({
  button: {
    minWidth: 32,
    alignContent: "center",
    justifyContent: "center",
  },
}));

/*
format:
 - facebook
 - instagram
 */

const IfSocialLink = ({ link = null, children, format, customClasses }) => {
  const classes = useStyle();
  const url = generateUrl({ format, link });
  if (!notNull(link)) {
    return null;
  }

  return (
    <ButtonBase
      className={clsx(classes.button, customClasses?.button)}
      component="a"
      href={format === "phone" ? `tel:${url}` : url}
      target={format === "phone" ? "_self" : "_blank"}
    >
      {children}
    </ButtonBase>
  );
};

export default IfSocialLink;
