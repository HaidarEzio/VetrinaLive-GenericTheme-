import { useCallback, useMemo } from "react";
import Router, { useRouter } from "next/router";
import isEmpty from "lodash/fp/isEmpty";
import { percentageDifference } from "Utils/utils";
import useIsProductVariationsHasDiffPrices from "./useIsProductVariationsHasDiffPrices";
// import { useCartStore } from '../../../context/CartStore'
// import useGetCheapestProductVariant from '../../ProductDetailed/components/Details/hooks/useGetCheapestProductVariant'
// import { useUtilsContext } from '../../../context/UtilsManager/context'

function useProductCard({
  price,
  variants,
  quantity,
  productKey,
  discounted_price,
  triggerEvent = () => null,
}) {
  // const getCheapestProductVariant = useGetCheapestProductVariant()
  // const { setTouched } = useUtilsContext()

  const {
    query: { shopKey },
  } = useRouter();

  // const {
  //   actions: { addItem: add }
  // } = useCartStore()

  const addItem = useCallback(
    (item) => {
      if (item.colors !== "" || item.weights !== "") {
        // setTouched(true)
        return Router.push(
          "/[shopKey]/[productKey]",
          `/${shopKey}/${item.key}`
        );
      }
      if (!isEmpty(item.variants)) {
        return Router.push(
          "/[shopKey]/[productKey]",
          `/${shopKey}/${item.key}`
        );
      }
      // add(item);
    },
    [shopKey]
  );

  // const cheapestVariant = getCheapestProductVariant.cb(variants)

  // modal with detailed product information
  const discountProcent =
    discounted_price && percentageDifference(price, discounted_price);

  const withDiscount = discounted_price;

  const isAvailableProduct = useMemo(() => quantity > 0, [quantity]);

  const openSingleProdPage = useCallback(() => {
    if (shopKey && productKey) {
      setTouched(false);
      triggerEvent();
      Router.push("/[shopKey]/[productKey]", `/${shopKey}/${productKey}`);
    }
  }, [shopKey, productKey, triggerEvent]);

  const hasDiffVariationsPrices = useIsProductVariationsHasDiffPrices(variants);

  return {
    discountProcent,
    withDiscount,
    isAvailableProduct,
    openSingleProdPage,
    addItem,
    hasDiffVariationsPrices,
  };
}

export default useProductCard;
