import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "Components/Container";
import { Grid, Typography } from "@material-ui/core";
import CustomLink from "Components/CustomLink";
import CustomButton from "Components/CustomButton";
import banner from "public/imgs/generic/F.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  title: theme.title({
    fontSize: 36,
    lineHeight: "40px",
    color: theme.palette.colors.white,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    marginLeft: 20,
    fontWeight: 400,
  }),
  description: theme.title({
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  }),
  btn: {
    width: "374px",
    padding: "0px 28px",
    color: theme.palette.primary.main,
  },
  cover: ({ banner }) => ({
    height: 575,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${banner})`,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  }),
  details: {
    height: "100%",
    marginLeft: 20,
    display: "flex",
    padding: "30px 0",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 20,
    },
  },
}));

const View = ({ shopKey, maxDiscount, t }) => {
  const classes = useStyles({ banner });
  const theme = useTheme();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={7}>
            <div className={classes.cover} />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <div className={classes.details}>
              {maxDiscount ? <Typography className={classes.description}>{t("save_up", { percent: maxDiscount })}</Typography> : null}
              <Typography className={classes.title}>{t("Discover our offers and save up to 50% on your purchase.")}</Typography>
              <CustomLink href="/[shopKey]/products" as={`/${shopKey}/products`}>
                <CustomButton
                  className={classes.btn}
                  backgroundColor={theme.palette.colors.white}
                  color={theme.palette.primary.main}
                  label={t("Shop Now")}
                />
              </CustomLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default View;
