import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const muiTheme = createTheme();

const reusableComponents = {
  drawer: {
    width: 370,
  },
  dropdown: {
    minWidth: 200,
    maxHeight: 300,
  },
  container: (props) => ({
    maxWidth: 1180,
    width: "100%",
    padding: "0 20px",
    margin: "0 auto",
    [muiTheme.breakpoints.down("md")]: {
      maxWidth: 900,
      width: "100%",
    },
    [muiTheme.breakpoints.down("sm")]: {
      maxWidth: 700,
      width: "100%",
    },
    [muiTheme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 20,
    },
    ...props,
  }),
  checkoutAdvanced: {
    background: {
      grey: "#F9F9F9",
    },
    white: "#FFFFFF",
    backgroundOfElements: "#E6E6E6",
    primaryTextColor: "#4D4D4D",
    primaryColor: "#296DCA",
    breadcrumbsSeparator: "#858C94",
  },
};

const colors = {
  dividers: {
    light: {
      40: "rgba(10, 37, 64, 0.16)",
    },
  },
  divider: "#c4cad2",
  mainFaded: "rgba(255, 17, 17, 0.3)",
  white: "#fff",
  white50: "rgba(255, 255, 255, 0.5)",
  purple: "#FF11BC",
  blue: {
    fb: "#1977F2",
    default: "#027DEE",
    lighten: "#1595F2",
    light: "#21B8F9",
    "05": "rgba(16, 59, 102, 0.5)",
    "08": "rgba(33, 184, 249, 0.08)",
  },

  black: {
    default: "#323643",
    rgb: "10, 37, 64",
    0: "#000000",
    1: "#103B66",
    40: "rgba(0, 0, 0, 0.4)",
    50: "rgba(0, 0, 0, 0.54)",
    60: "rgba(0, 0, 0, 0.6)",
    70: "rgba(0, 0, 0, 0.7)",
    90: "rgba(0,0,0,0.9)",
  },
  neutral: {
    black: "#09101D",
    100: "#000000",
    90: "#1A1A1A",
    80: "#333333",
    70: "#4D4D4D",
    60: "#666666",
    50: "#808080",
    40: "#999999",
    30: "#B3B3B3",
    20: "#CCCCCC",
    10: "#E6E6E6",
    5: "#858C94",
    2: "#394452",
  },
  states: {
    success: "#1DB468",
    warning: "#F4923D",
    error: "#F13131",
    info: "#0090F9",
  },
  background: {
    default: "#F9F9F9",
    overlay: "rgba(0, 0, 0, 0.32)",

    light_gray: "#F8F9FB",
    white: "#FBFBFB",
    success: "rgba(29, 180, 104, 0.2)",
    warning: "rgba(244, 146, 61, 0.2)",
    error: "rgba(241, 49, 49, 0.2)",
    info: "rgba(0, 144, 249, 0.2)",
  },
  tints: {
    black: {
      100: "#E7E9EC",
      200: "#CED3D9",
      300: "#B6BEC6",
      400: "#999999",
      500: "#6C7C8C",
      600: "#666666",
      700: "#546679",
      800: "#3B5166",
    },
    grey: {
      69: "#C4C4C4",
      70: "#454545",
    },
    orange: {
      100: "rgba(247, 194, 146, 0.08)",
    },
    red: {
      300: "#FFD1D8",
    },
  },
  hover: "#f5f5f5",
  grey: {
    default: "rgba(0, 0, 0, 0.1)",
    btn: "#C2C2C2",
    divider: "#E5E5E5",
    "04": "rgba(0, 0, 0, 0.04)",
    1: "#757575",
    2: "#666666",
    3: "#b0b1b2",
    5: "#F9F9F9",
    8: "#8C8C8C",
    9: "#727272",
    15: "rgba(0, 0, 0, 0.15)",
    20: "rgba(0, 0, 0, 0.2)",
  },
  green: {
    default: "#11B35B",
    new: "#00C48C",
    hover: "#16693c",
    contact: "#25D366",
  },

  contrastText: "#fff",
  red: "#F33451",
  orange: "#FFA26B",
  lila: "#E1306C",

  lightgrey: "#F2F3F7",
  lightgreen: "#4CAF50",
  lightblue: "#C6D0EB",
  lightRed: "rgba(255, 17, 17, 0.05)",
  lightPink: "rgba(255, 17, 17, 0.3)",
};

const reusablePalette = {
  error: {
    main: red.A400,
  },
  shadows: {
    card: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    card_16:
      "0px 16px 16px rgba(50, 50, 71, 0.08), 0px 24px 32px rgba(50, 50, 71, 0.08)",
    card_4:
      "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
    tableItem: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    button:
      "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
  },
};

export { reusableComponents, colors, reusablePalette };
