import React, { memo } from "react";
import { useTheme } from "@material-ui/core/styles";
import * as themes from "Themes/exportTheme";
import useSearchProducts from "./hooks/useSearchProducts";

const AdminSearchBar = (props) => {
  const { handleChange, value } = useSearchProducts();
  const { placeholder = "Search..." } = props;

  const { name } = useTheme();
  const { SearchBar: View } = themes[name] || {};

  const rest = {
    handleChange,
    placeholder,
    value,
    ...props,
  };

  return <View {...rest} />;
};

export default memo(AdminSearchBar);
