import React from "react";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";

function Layout(props) {
  const { children } = props;
  const { name } = useTheme();
  const { Layout: ThemeLayout } = themes[name];

  return <ThemeLayout {...props}>{children}</ThemeLayout>;
}

export default Layout;
