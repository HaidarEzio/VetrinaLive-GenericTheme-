import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReusableCategories from "ReusableThemes/PreviewComponents/ReusableCategories";

const useStyles = makeStyles((theme) => ({
  rows: {
    margin: `${theme.spacing(5)}px 0`,
    justifyContent: "space-between",
  },
  button: ({ showBtn }) => ({
    maxWidth: 250,
    maxHeight: 42,
    padding: "40px 62px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.colors.white,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1.5)}px 12px`,
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(50% - 24px)",
      "&:last-of-type": {
        width: showBtn ? "calc(100% - 24px)" : "calc(50% - 24px)",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.colors.whiteish,
      color: theme.palette.secondary.main,
    },
  }),
  text: {
    fontSize: 16,
    lineHeight: "20px",
  },
  allCategories: {
    textOverflow: "unset",
    whiteSpace: "normal",
  },
}));

const View = (props) => {
  const { showBtn } = props;
  const classes = useStyles({ showBtn });

  return (
    <ReusableCategories
      _classes={{
        rows: classes.rows,
        button: classes.button,
        text: classes.text,
        allCategories: classes.allCategories,
      }}
      {...props}
    />
  );
};

export default View;
