import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCart from "Icons/ShoppingCart";

const useStyle = makeStyles((theme) => ({
  cartIcon: {
    position: "relative",
    color: theme.palette.colors.black[50],
    transform: "scale(1) rotate(0deg)",
    transition: "transform 0.1s ease-in-out",
    padding: 11,
    "& svg": {
      width: 25,
      height: 25,
    },
  },
  shake: {
    transform: "scale(1.2) rotate(-20deg)",
  },
  cartCounter: {
    minWidth: 16,
    minHeight: 16,
    background: theme.palette.colors.red,
    fontSize: 12,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "100%",
    color: theme.palette.colors.white,
    fontWeight: 400,
    lineHeight: "9px",
    position: "absolute",
    top: 4,
    right: 5,
    padding: "3px 3px 2px",
  },
}));

const CartWithCounter = ({
  onClick,
  quantity,
  shake,
  icon = <ShoppingCart />,
  className,
}) => {
  const classes = useStyle();
  return (
    <IconButton
      onClick={onClick}
      className={clsx(classes.cartIcon, className, {
        [classes.shake]: shake,
      })}
    >
      {icon}
      {quantity > 0 && (
        <Typography className={classes.cartCounter}>{quantity}</Typography>
      )}
    </IconButton>
  );
};

export default CartWithCounter;
