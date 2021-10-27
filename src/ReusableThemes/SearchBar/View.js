import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "Components/CustomInput";
import SearchIcon from "Icons/Search";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  root: {
    paddingRight: 20,
    backgroundColor: theme.palette.colors.white,
    borderRadius: 4,
    height: 48,
    color: theme.palette.colors.mainFaded,
  },
  input: {
    flexGrow: 1,
    fontSize: 17,
    fontWeight: 300,
    color: theme.palette.colors.black[0],
    "&::placeholder, &:-ms-input-placeholder, &::-ms-input-placeholder": {
      color: `${theme.palette.colors.black[0]}!important`,
      fontWeight: 300,
      opacity: 1,
    },
  },
  focused: {
    boxShadow: "none",
    outline: "none",
  },
  startAdornment: {
    marginRight: 23,
    marginLeft: 0,
    [theme.breakpoints.down("xs")]: {
      marginRight: 15,
    },
  },
}));

const View = ({
  placeholder,
  handleChange,
  value,
  className,
  _classes,
  ...props
}) => {
  const classes = useStyles();
  return (
    <CustomInput
      type="text"
      placeholder={placeholder}
      classes={{
        root: clsx(classes.root, _classes?.root),
        input: classes.input,
        focused: classes.focused,
        startAdornment: classes.startAdornment,
      }}
      className={clsx(classes.wrapper, className)}
      startAdornment={<SearchIcon />}
      onChange={handleChange}
      value={value}
      withBottomMargin={false}
      {...props}
    />
  );
};

export default View;
