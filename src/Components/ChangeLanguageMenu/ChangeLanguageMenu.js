import React, { useCallback, useState } from "react";
import useSelectLanguage from "./hooks/useSelectLanguage";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";

const ChangeLanguageMenu = ({ t, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const { options, selectedOption } = useSelectLanguage(t);

  const openDropdown = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const { name } = useTheme();
  const { ChangeLanguageMenu: View } = themes[name] || {};

  const props = {
    t,
    anchorEl,
    options,
    selectedOption,
    openDropdown,
    handleCloseMenu,
    ...rest,
  };
  return <View {...props} />;
};

export default ChangeLanguageMenu;
