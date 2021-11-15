import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReusableGalleryPreview from "ReusableThemes/PreviewComponents/Gallery/View";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: theme.title({
    fontSize: 36,
    lineHeight: "32px",
  }),
  cardsRoot: {},
  card: {
    padding: "0 4px",
    flexBasis: "20.83%",
    height: "266px",
    borderRadius: "5px",
    marginBottom: "8px",
    [theme.breakpoints.up("md")]: {
      "&:first-child": {
        flexBasis: "37.5%",
      },
      "&:last-child ": {
        flexBasis: "37.5%",
      },
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
      height: 190,
      "&:last-of-type": {
        marginBottom: 0,
      },
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
  },
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
