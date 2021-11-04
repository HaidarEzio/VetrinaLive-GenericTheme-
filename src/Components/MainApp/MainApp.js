import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { CustomThemeContext } from "Context/CustomThemeProvider";
import { themesList, usedTheme } from "Utils/utils";
import CustomLink from "Components/CustomLink";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  selecterContainer: {
    display: "grid",
    margin: "0px auto",
    maxWidth: 300,
  },
  button: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  selected: {
    color: theme.palette.primary.main,
  },
}));

//? this is what's first rendered on the app
//? having styles, a context hook, and a state for selection
//? maps over the themes in another file, sends a button for each one
//? redirects for layout which is dynamic, with a custome link 
const MainApp = () => {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const [selected, setSelected] = useState(usedTheme(currentTheme));

  const handleClick = (curr) => {
    setTheme(curr.id);
    setSelected(curr);
  };

  return (
    <div className={classes.root}>
      <div className={classes.selecterContainer}>
        <Typography className={classes.selected}>Selected theme: {selected?.name}</Typography>
        {themesList.map((theme) => (
          <Button key={theme.id} className={classes.button} onClick={() => handleClick(theme)}>
            {theme.name}
          </Button>
        ))}
      </div>

      <CustomLink href="/layout">
        <Typography>Go to Main Page</Typography>
      </CustomLink>
    </div>
  );
};

export default MainApp;
