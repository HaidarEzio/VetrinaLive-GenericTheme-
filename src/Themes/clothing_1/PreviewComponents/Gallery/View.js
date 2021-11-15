import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReusableGalleryPreview from "ReusableThemes/PreviewComponents/Gallery/View";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: theme.title({
    fontSize: 24,
    lineHeight: "32px",
  }),
  cardsRoot: {},
  card: {
    height: 265,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
      height: 190,
      padding: "0 16px",
      "&:last-of-type": {
        marginBottom: 0,
      },
    },
  },
  button: {},
  media: {},
}));

const View = (props) => {
  const classes = useStyles();
  return (
    <ReusableGalleryPreview
      _classes={{
        root: classes.root,
        title: classes.title,
        cardsRoot: classes.cardsRoot,
        card: classes.card,
        button: classes.button,
        media: classes.media,
      }}
      {...props}
    />
  );
};

export default View;
