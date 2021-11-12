import Router, { useRouter } from "next/router";
// import { useShopInfoContext } from '../../../context/ShopInfoStore/context'
// import { useLayoutProvider } from '../../../components/LayoutProvider/context'
import { useCallback } from "react";

function useNavigationLinks({ t }) {
  const {
    query: { shopKey },
  } = useRouter();
  // const { shop } = useShopInfoContext()
  // const { categories } = shop || {};
  // const {
  //   showPromotionalPackages: isPromoPackages,
  //   showGallery: isGallery
  // } = useLayoutProvider()
  // const isCategories = categories?.length > 0;

  const links = [
    {
      to: "/",
      path: "/[shopKey]",
      label: "Vetrina",
    },
    {
      to: "/categories",
      path: "/[shopKey]/categories",
      label: t("Categories"),
    },
    {
      to: "/products",
      path: "/[shopKey]/products",
      label: t("Products"),
    },
    {
      to: "/packages",
      path: "/[shopKey]/packages",
      label: t("Promotional Packages"),
    },
    {
      to: "/gallery",
      path: "/[shopKey]/gallery",
      label: t("Gallery"),
    },
    {
      to: "/details",
      path: "/[shopKey]/details",
      label: t("Information"),
    },
  ].filter(Boolean);

  const goTo = useCallback(
    (path) => {
      Router.push(`/[shopKey]${path}`, `/${shopKey}${path}`);
    },
    [shopKey]
  );

  return { links, goTo };
}

export default useNavigationLinks;
