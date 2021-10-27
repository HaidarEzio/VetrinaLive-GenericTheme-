import { reusableComponents, reusablePalette, colors } from "Utils/styles";
import { DEFAULT_THEME } from "Utils/utils";

const default_theme = {
  name: DEFAULT_THEME,
  palette: {
    primary: {
      main: "#21B8F9",
      opacity: "rgba(41, 109, 202, 0.15)",
    },
    secondary: {
      main: "#3857FD",
    },
    background: {
      page: "#FFFFFF",
    },
    colors: { ...colors },
    ...reusablePalette,
  },
  typography: {
    fontFamily: "Noto Sans HK, sans-serif",
    button: {
      fontWeight: 700,
    },
  },
  ...reusableComponents,
};

export default default_theme;
