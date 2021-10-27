import { reusablePalette, colors, reusableComponents } from "Utils/styles";
import "./clothing_1.module.css";

const clothing_1 = {
  name: "clothing_1",
  palette: {
    primary: {
      main: "#000000",
      opacity: "rgba(0, 0, 0, 0.15)",
    },
    secondary: {
      main: "#967844",
      opacity: "rgba(150, 120, 68, 0.5)",
    },
    background: {
      page: "#FFFFFF",
    },
    colors: {
      beige: "#F3E2D5",
      ...colors,
    },
    ...reusablePalette,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    button: {
      fontWeight: 700,
    },
  },
  title: (props) => ({
    fontFamily: "PlayfairDisplay, sans-serif",
    fontWeight: 700,
    color: colors.black[0],
    ...props,
  }),
  ...reusableComponents,
};

export default clothing_1;
