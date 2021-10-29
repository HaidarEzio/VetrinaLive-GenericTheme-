import { useState, useEffect } from "react";

const useGallery = ({ shop }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { gallery } = shop || {};
  const [imgArray, setImgArray] = useState(gallery);

  const toggleDialog = (value) => {
    setOpen((curr) => !curr);
    setSelected(value);
  };

  useEffect(() => {
    if (gallery) setImgArray(gallery);
  }, [gallery]);

  return {
    open,
    selected,
    toggleDialog,
    imgArray,
  };
};

export default useGallery;
