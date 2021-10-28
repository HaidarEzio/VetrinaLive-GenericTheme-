import React from "react";
import CustomLink from "Components/CustomLink";
import CustomButton from "Components/CustomButton";

const CardButton = ({
  shopKey,
  promoPackageId,
  className,
  t,
  backgroundColor,
  label,
  ...restProps
}) => {
  return (
    <CustomLink
      href="/[shopKey]/packages/[packageId]"
      as={`/${shopKey}/packages/${promoPackageId}`}
    >
      <CustomButton
        backgroundColor={backgroundColor}
        className={className}
        label={label ?? t("shop_now")}
        {...restProps}
      />
    </CustomLink>
  );
};

export default CardButton;
