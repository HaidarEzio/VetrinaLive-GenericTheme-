import React from "react";
import cn from "clsx";
import Carousel from "react-multi-carousel";
import getOr from "lodash/fp/getOr";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Container from "Components/Container";
import ProductCard from "Components/ProductCard";
import CarouselButtons from "Components/FeaturedProductsList/components/CarouselButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px 0",
  },
  carouselRoot: {
    position: "relative",
    overflow: "hidden",
  },
  title: theme.title({
    textAlign: "center",
  }),
  grid: {
    position: "relative",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 0 30px",
      margin: "0 auto",
      maxWidth: 265,
    },
  },

  carouselContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "normal",
      overflow: "visible",
      margin: "0 -12px",
      width: "calc(100% + 24px)",
    },
  },
  card: {
    height: "100%",
    padding: "0 12px",
  },

  arrowsBtn: {
    position: "absolute",
    transition: "opacity 0.3s ease-in-out",
  },
  arrows: {
    fontSize: 25,
    color: theme.palette.colors.white,
  },
  leftArrow: {
    left: 0,
  },
  rightArrow: {
    right: 0,
  },
}));

const View = (props) => {
  const {
    responsive,
    add,
    deviceType,
    t,
    featuredProducts,
    carousel,
    _classes,
  } = props;
  const classes = useStyles();
  return (
    <div className={cn(classes.root, _classes?.root)}>
      <Typography className={cn(classes.title, _classes?.title)}>
        {t("featured_products_title")}
      </Typography>
      <div className={cn(classes.carouselRoot, _classes?.carouselRoot)}>
        <Container>
          <Grid container className={cn(classes.grid, _classes?.grid)}>
            <Carousel
              ssr
              infinite
              autoPlay
              autoPlaySpeed={3000}
              ref={carousel}
              focusOnSelect
              partialVisible
              draggable={false}
              responsive={responsive}
              containerClass={cn(
                classes.carouselContainer,
                _classes?.carouselContainer
              )}
              dotListClass={classes.dotList}
              deviceType={deviceType}
              arrows={false}
              renderButtonGroupOutside
              customButtonGroup={<CarouselButtons />}
            >
              {featuredProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  key={product.id}
                  className={cn(classes.card, _classes?.card)}
                >
                  <ProductCard
                    {...product}
                    isFeaturedProduct
                    productKey={product.key}
                    addItem={add}
                    triggerEvent={() => {
                      let currentSlide = getOr(
                        null,
                        ["current", "state", "currentSlide"],
                        carousel
                      );
                      if (featuredProducts.length > 2 && currentSlide) {
                        localStorage.setItem(
                          "current-carousel-item",
                          currentSlide
                        );
                      }
                    }}
                    t={t}
                  />
                </Grid>
              ))}
            </Carousel>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default View;
