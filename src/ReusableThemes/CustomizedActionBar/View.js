import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import AdminSearchBar from "Components/AdminSearchBar";
import SearchIcon from "Icons/Search";
import ShopBag from "Icons/ShopBag";
import AccountIcon from "Icons/AccountIcon";
import Container from "Components/Container";
import CartWithCounter from "Components/CartWithCounter";

const useStyle = makeStyles((theme) => ({
  actionBar: {
    zIndex: 4,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  search: {
    paddingLeft: 15,
    background: theme.palette.colors.white,
    position: "absolute",
    bottom: 2,
    right: 0,
    transform: "translateY(100%)",
    width: "100%",
    borderBottom: `1px solid ${theme.palette.colors.neutral[50]}`,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      left: 0,
    },
  },
  searchBar: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  searchBarRoot: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    "& svg[stroke]": {
      stroke: theme.palette.colors.neutral[60],
    },
    "&:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.down(350)]: {
      marginRight: 12,
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
}));

const View = ({
  t,
  toggleCartDrawer,
  toggleAccountModal,
  toggleNavigation,
  searchValue = null,
  quantity,
  iconColor = "#666666",
  customClasses = {},
  hideSearch = false,
  hideCart = false,
  hideAccount = false,
  hideMenu = false,
}) => {
  const classes = useStyle();
  const [isSearch, openSearch] = useState(Boolean(searchValue));
  const theme = useTheme();
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justify="flex-end"
      wrap="nowrap"
      alignItems="center"
      className={clsx(classes.actionBar, customClasses?.actionBar)}
    >
      {isSearch && (
        <div className={classes.search}>
          <Container>
            <AdminSearchBar
              autoFocus={isSearch}
              className={classes.searchBar}
              placeholder={t("search_prods")}
              t={t}
              _classes={{
                root: classes.searchBarRoot,
              }}
            />
          </Container>
        </div>
      )}
      <div className={clsx(classes.rightSide, customClasses?.iconWrapper)}>
        {!hideSearch && (
          <IconButton
            onClick={() => openSearch((open) => !open)}
            className={clsx(classes.buttons, customClasses?.buttons)}
          >
            <SearchIcon stroke={iconColor} />
          </IconButton>
        )}
        {!hideCart && (
          <CartWithCounter
            onClick={toggleCartDrawer}
            quantity={quantity}
            className={clsx(classes.buttons, customClasses?.buttons)}
            icon={<ShopBag stroke={iconColor} />}
          />
        )}
        {!hideAccount && (
          <IconButton
            onClick={toggleAccountModal}
            className={clsx(classes.buttons, customClasses?.buttons)}
          >
            <AccountIcon stroke={iconColor} />
          </IconButton>
        )}
        {breakpointsDownSm && !hideMenu && (
          <IconButton
            onClick={toggleNavigation}
            className={clsx(classes.buttons, customClasses?.buttons)}
          >
            <MenuRounded />
          </IconButton>
        )}
      </div>
    </Grid>
  );
};

export default View;
