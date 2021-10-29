import React from "react";
import isEmpty from "lodash/isEmpty";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";
import useCategoriesPreview from "./hooks/useCategoriesPreview";

const Categories = ({ categories, limit = 4, shopKey, t, ...rest }) => {
  const showBtn = categories?.length > limit;
  const { onClick, showAllCategories } = useCategoriesPreview({ shopKey });

  const props = {
    t,
    showBtn,
    onClick,
    showAllCategories,
    categories,
    limit,
    ...rest,
  };

  const { name } = useTheme();
  const { PreviewCategories: View } = themes[name] || {};

  if (isEmpty(categories)) return null;

  return <View {...props} />;
};

export default Categories;
