import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
}));

const FullScreenLoader = (props) => {
  const { size = 30, customClasses } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, customClasses?.root)}>
      <CircularProgress
        disableShrink
        classes={{
          colorPrimary: clsx(classes.colorPrimary, customClasses?.colorPrimary),
        }}
        size={size}
      />
    </div>
  );
};

export default React.memo(FullScreenLoader);
