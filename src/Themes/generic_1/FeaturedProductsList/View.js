import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReusableFeaturedProductsList from "ReusableThemes/FeaturedProductsList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px 0",
    padding: "30px 0",
    backgroundColor: theme.palette.colors.whiteish,
  },
  carouselRoot: {
    marginBottom: 40,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
    },
  },
  title: theme.title({
    fontSize: 36,
    lineHeight: "32px",
    marginBottom: 40,
  }),
  grid: {},
  carouselContainer: {
    display: "flex",
    justifyContent: "normal",
    "& ul": {
      display: "flex",
      justifyContent: "center",
      listStyle: "none",
      paddingLeft: "0",
    },
    "& .react-multi-carousel-item": {
      opacity: "0.50",
    },
    "& .react-multi-carousel-item--active": {
      opacity: "1",
    },
  },
  card: {},
}));

const FeaturedProductsList = (props) => {
  const classes = useStyles();
  return (
    <ReusableFeaturedProductsList
      withTitle
      _classes={{
        root: classes.root,
        carouselRoot: classes.carouselRoot,
        title: classes.title,
        grid: classes.grid,
        carouselContainer: classes.carouselContainer,
        card: classes.card,
      }}
      {...props}
    />
  );
};

export default FeaturedProductsList;
