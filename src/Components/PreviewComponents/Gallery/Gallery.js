import React, { useMemo } from "react";
import useGallery from "Components/GalleryItemList/useGallery";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";

const Gallery = ({ t, limit = 8, shop }) => {
  const { selected, open, toggleDialog, imgArray } = useGallery({ shop });
  const { gallery, key } = shop || {};

  const filteredItems = imgArray?.slice(0, limit);
  const showButton = gallery?.length > limit;

  const props = useMemo(
    () => ({
      filteredItems,
      toggleDialog,
      open,
      selected,
      showButton,
      t,
      shopKey: key,
    }),
    [filteredItems, toggleDialog, open, selected, showButton, t, key]
  );

  const { name } = useTheme();
  const { PreviewGallery: View } = themes[name] || {};

  return <View {...props} />;
};

export default Gallery;
