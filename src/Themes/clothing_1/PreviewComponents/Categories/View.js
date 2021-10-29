import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReusableCategories from "ReusableThemes/PreviewComponents/ReusableCategories";

const useStyles = makeStyles((theme) => ({
  rows: {
    margin: `${theme.spacing(5)}px 0`,
  },
  button: ({ showBtn }) => ({
    maxWidth: 175,
    maxHeight: 42,
    margin: `0 ${theme.spacing(1.5)}px`,
    padding: `${theme.spacing(1.5)}px 24px`,
    border: `1px solid ${theme.palette.colors.neutral[30]}`,
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
  }),
  text: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "20px",
    color: theme.palette.colors.black[0],
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
