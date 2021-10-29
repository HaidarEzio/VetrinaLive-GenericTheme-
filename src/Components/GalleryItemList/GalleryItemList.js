import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GalleryItem from "./components/GalleryItem";
import PreviewDialog from "./components/PreviewDialog/PreviewDialog";
import useGallery from "./useGallery";

const useStyles = makeStyles((theme) => ({
  cardsRoot: {
    margin: "0 -7px",
    width: "calc( 100% + 14px )",
    [theme.breakpoints.down("xs")]: {
      margin: "0 -3px",
      width: "calc( 100% + 6px )",
    },
  },
  card: {
    zIndex: 3,
    height: 225,
    maxWidth: 400,
    width: "100%",
    padding: "0 7px",
    marginBottom: 15,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
      padding: "0 3px",
    },
    [theme.breakpoints.down("500")]: {
      height: 100,
    },
  },
  media: {
    overflow: "hidden",
    padding: "5px 0px",
  },
}));

const GalleryItemList = ({ shop }) => {
  const classes = useStyles();
  const { selected, open, toggleDialog, imgArray } = useGallery({ shop });

  return (
    <Grid container justify="center" className={classes.cardsRoot}>
      {imgArray &&
        imgArray.length > 0 &&
        imgArray.map((img) => (
          <Grid item xs={4} lg={3} xl={3} key={img.id} className={classes.card}>
            <GalleryItem
              className={classes.media}
              image={img}
              toggleDialog={toggleDialog}
            />
          </Grid>
        ))}
      <PreviewDialog open={open} onClose={toggleDialog} image={selected} />
    </Grid>
  );
};

export default GalleryItemList;
