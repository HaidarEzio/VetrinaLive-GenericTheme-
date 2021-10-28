import React, { useMemo } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/fp/isEmpty";
import useFetchPromoPackages from "hooks/useFetchPromoPackages";
import useFilterProducts from "hooks/useFilterProducts";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";
import SingleCard from "Components/SingleCard";

const Packages = ({ t, onReturn, shopKey, currency }) => {
  const filters = useFilterProducts();
  const { loading, rows: promoPackages } = useFetchPromoPackages({
    shopKey,
    filters,
  });
  const params = useRouter();
  const isPromoPackagePage = params.pathname.includes("packages");

  const packages = useMemo(
    () =>
      promoPackages.map((i) => {
        const prices = i.products.map((p) => parseFloat(p.price));
        const totalPrice = !isEmpty(prices)
          ? prices.reduce((acc, curr) => acc + curr)
          : 0;

        return {
          ...i,
          id: i.id,
          name: i.name,
          description: i.description,
          price: totalPrice,
          promo_price: parseFloat(i.price),
          products: i.products,
        };
      }),
    [promoPackages]
  );

  const props = useMemo(
    () => ({
      t,
      loading,
      shopKey,
      packages,
      onReturn,
      isPromoPackagePage,
    }),
    [t, loading, onReturn, shopKey, packages, isPromoPackagePage]
  );

  const { name } = useTheme();
  const { Packages: View } = themes[name] || {};

  return (
    <View
      {...props}
      Card={({ width, promoPackage, ...rest }) => (
        <SingleCard
          t={t}
          width={width}
          shopKey={shopKey}
          currency={currency}
          promoPackage={promoPackage}
          isPromoPackagePage={isPromoPackagePage}
          {...rest}
        />
      )}
    />
  );
};

export default Packages;
