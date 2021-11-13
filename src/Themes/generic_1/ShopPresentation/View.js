import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import FullImagePresentation from "ReusableThemes/FullImagePresentation";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "clamp(36px, 3.846vw, 50px)",
    lineHeight: "clamp(52px, 3.846vw, 66px)",
  },
  additionalInfo: {
    transform: "translateY(50%)",

    backgroundColor: theme.palette.colors.neutral[10],
  },
  additionalInfoItem: {
    padding: "0 18px",

    [theme.breakpoints.down("sm")]: {
      marginBottom: 45,
      "& svg": {
        marginRight: 40,
      },
      "&:last-of-type": {
        marginBottom: 0,
      },
    },
  },
  infoTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "20px",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 14,
    lineHeight: "20px",
    color: theme.palette.colors.neutral[80],
  },
  description: {
    color: "white",
    fontFamily: "Source Sans Pro Regular, sans serif",
  },
}));

const View = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <FullImagePresentation
      _classes={{
        title: classes.title,
        additionalInfo: classes.additionalInfo,
        additionalInfoItem: classes.additionalInfoItem,
        infoTitle: classes.infoTitle,
        text: classes.text,
        description: classes.description,
      }}
      iconColor={theme.palette.primary.main}
      circleLogo
      objectFit="none"
      {...props}
    />
  );
};

export default memo(View);
