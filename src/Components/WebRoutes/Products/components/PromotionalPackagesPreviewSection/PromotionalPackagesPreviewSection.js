import React, { useMemo } from "react";
import isEmpty from "lodash/fp/isEmpty";
import { useTheme } from "@material-ui/styles";
import * as themes from "Themes/exportTheme";
import SingleCard from "Components/WebRoutes/Packages/components/SingleCard";
import useIsMobile from "hooks/useIsMobile";
import useGetCurrency from "hooks/useGetCurrency";

function PromotionalPackagesPreviewSection(props) {
  const { _classes = {}, t, shopKey, promoPackagesData, shop } = props;

  const isMobile = useIsMobile();

  const {
    currency: { symbol },
  } = useGetCurrency({ shop });

  const promoPackages = [
    {
      active: true,
      description: "5% Discount",
      id: 126,
      name: "Snacks for those who crave and if text is too...",
      orignal_price: 361.83,
      picture_url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/product-packages/USVcwFeJ5PDgFnHLHol0YhZN8ZNwZc5S8711e4T3.jpeg",
      price: "11.65",
      products: [
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
      ],
    },
    {
      active: true,
      description: "5% Discount",
      id: 126,
      name: "New Arrivals",
      orignal_price: 361.83,
      picture_url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/product-packages/USVcwFeJ5PDgFnHLHol0YhZN8ZNwZc5S8711e4T3.jpeg",
      price: "11.65",
      products: [
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
        {
          category: null,
          id: 12679,
          key: "Max+size+product-12679",
          name: "Max size product",
          pictures: [
            {
              "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/mPlBFMzmo3gouJCdNT1bh8PWqTVUpwEGDEeS3yMT.jpeg",
              "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12679/GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe.jpeg",
              id: "GOS2p9M43mDiyETUopCyUGXENrWxH3JDUju7QrTe",
            },
          ],
          price: 60,
          quantity: 110,
          variants: [],
        },
      ],
    },
  ];

  const packages = useMemo(
    () =>
      promoPackages?.map((i) => {
        const prices = i?.products?.map((p) => parseFloat(p.price));
        const totalPrice = !isEmpty(prices) ? prices.reduce((acc, curr) => acc + curr) : 0;

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

  const { name } = useTheme();
  const { PromoPackagesPreview: View } = themes[name] || {};

  const rest = useMemo(() => ({ t, _classes, isMobile, packages, shopKey }), [t, _classes, isMobile, packages, shopKey]);

  if (isEmpty(promoPackages)) return null;

  return (
    <View
      {...rest}
      Card={({ promoPackage, width, index }) => (
        <SingleCard t={t} width={width} shopKey={shopKey} currency={symbol} promoPackage={promoPackage} index={index} />
      )}
    />
  );
}

export default PromotionalPackagesPreviewSection;
