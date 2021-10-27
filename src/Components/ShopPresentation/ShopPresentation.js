import React, { memo, useCallback } from "react";
import { useTheme } from "@material-ui/styles";
import useShopBanner from "hooks/useShopBanner";
import { notNull } from "Utils/utils";
import * as themes from "Themes/exportTheme";

const ShopPresentation = ({ shop, t }) => {
  const { name } = useTheme();
  const { ShopPresentation: View } = themes[name] || {};
  const {
    address,
    civic_number: civicNr,
    city,
    province,
    zipcode,
  } = shop || {};

  const getShopBanner = useShopBanner("name");

  const getFullAddress = useCallback(() => {
    const addr = [address, civicNr, city, province, zipcode].filter((item) =>
      notNull(item)
    );
    return addr.length > 0 ? addr.join(", ") : null;
  }, [address, civicNr, city, province, zipcode]);

  const rest = {
    t,
    getFullAddress,
    getShopBanner,
    shop,
  };

  return <View {...rest} />;
};

ShopPresentation.getInitialProps = async ({ renderPage }) => {
  const page = renderPage((Page) => (props) => <Page {...props} />);
  return { ...page };
};

export default memo(ShopPresentation);
