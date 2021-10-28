import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import noPreview from "public/imgs/nopreview.png";
import getOr from "lodash/fp/getOr";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid red'
  },
  title: {
    fontSize: 16,
    lineHeight: "22px",
    color: theme.palette.colors.black[60],
    marginBottom: theme.spacing(1),
  },
  picture: {
    objectFit: "cover",
    width: 28,
    height: 28,
    borderRadius: 28,
    marginRight: theme.spacing(1.25),
  },
  hasMore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: theme.palette.colors.tints.grey[69],
  },
  subtitle: {
    color: theme.palette.colors.black[1],
    fontSize: 14,
    lineHeight: "22px",
  },
}));

function PicturesPreviewRow(props) {
  const { products = [], t } = props;
  const classes = useStyles();

  const maxPicsPerRow = 5;
  const filteredProducts = products.slice(0, maxPicsPerRow);
  const hasMore = products.length > maxPicsPerRow;
  const hasMoreCount = products.length - maxPicsPerRow;
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t("products")}:</Typography>
      <Grid container alignItems="center">
        {filteredProducts.map((p, i) => {
          const src = getOr(noPreview, "1000x1200", p.pictures[0]);
          const id = getOr(noPreview, "id", p.pictures[0]);
          return <img key={i} className={classes.picture} src={src} alt={id} />;
        })}
        {hasMore && (
          <div className={classes.hasMore}>
            <Typography className={classes.subtitle}>
              +{hasMoreCount}
            </Typography>
          </div>
        )}
      </Grid>
    </div>
  );
}

export default PicturesPreviewRow;
