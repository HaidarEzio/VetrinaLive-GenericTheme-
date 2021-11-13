import React from "react";
import clsx from "clsx";
import getOr from "lodash/fp/getOr";
import noPreview from "public/imgs/nopreview.png";
import Typography from "@material-ui/core/Typography";

const CardPictures = ({
  picturesClassName,
  pictureClassName,
  morePictureClassName,
  moreProductLabelClassName,
  filteredProducts,
  productsLeftAmount,
}) => {
  return (
    <div className={picturesClassName}>
      {filteredProducts.map((p) => {
        const src = getOr(noPreview, "1000x1200", p.pictures[0]);
        const id = getOr(noPreview, "id", p.pictures[0]);
        return (
          <div key={id} className={pictureClassName}>
            <img src={src} alt={id} />
          </div>
        );
      })}
      {productsLeftAmount > 0 && (
        <div className={clsx(pictureClassName, morePictureClassName)}>
          <Typography className={moreProductLabelClassName}>{`+${productsLeftAmount}`}</Typography>
        </div>
      )}
    </div>
  );
};

export default CardPictures;
