import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import CustomDropdown from "Components/CustomDropdown";

const useStyles = makeStyles((theme) => ({
  title: ({ color = theme.palette.colors.black[1] }) => ({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    color,
    "& span": {
      textTransform: "uppercase",
    },
  }),
  button: {
    textTransform: "none",
  },
  arrow: ({ color = theme.palette.colors.black[1] }) => ({
    marginLeft: 2,
    color,
  }),
}));

const View = ({ t, anchorEl, options, selectedOption, openDropdown, handleCloseMenu, color }) => {
  const classes = useStyles({ color });
  return (
    <div className={classes.root}>
      <Button onClick={openDropdown} className={classes.button}>
        <Typography className={classes.title}>
          {t("Language")} : <span>{selectedOption?.title.slice(0, 2)}</span>
        </Typography>
        <ExpandMore className={classes.arrow} />
      </Button>
      <CustomDropdown items={options} anchorEl={anchorEl} handleClose={handleCloseMenu} minWidth={150} maxHeight={225} />
    </div>
  );
};

export default View;
