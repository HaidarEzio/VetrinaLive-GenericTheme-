import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import selectedTheme from "Utils/selectedTheme";
import useStickyState from "hooks/useStickyState";
import FullScreenLoader from "Components/FullScreenLoader";
import { DEFAULT_THEME } from "Utils/utils";

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(null);

const CustomThemeProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  // Read current theme from localStorage or maybe from an api
  const [currTheme, setCurrTheme] = useStickyState(DEFAULT_THEME, "appTheme");

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currTheme);
  const [loading, setLoading] = useState(true);

  // Retrieve the theme object by theme name
  const theme = selectedTheme(themeName);

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    setCurrTheme(name, "appTheme");
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  /**simulated fetch */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    _setThemeName(currTheme);
  }, [currTheme]);

  if (loading) return <FullScreenLoader />;

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
