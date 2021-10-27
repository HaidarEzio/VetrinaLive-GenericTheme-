import { createTheme } from "@material-ui/core/styles";
import default_theme from "Themes/default_theme/theme";
import clothing_1 from "Themes/clothing_1/theme";

const themes = {
  clothing_1,
};

const selectedTheme = (mode) => {
  const theme = themes[mode] || default_theme;
  return createTheme(theme);
};

export default selectedTheme;
