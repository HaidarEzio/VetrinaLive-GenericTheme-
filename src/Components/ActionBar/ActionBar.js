import React, { memo, useMemo } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import get from "lodash/fp/get";

// import { useCartStore } from '../../context/CartStore'
// import { useShopInfoContext } from "../../context/ShopInfoStore/context";
// import useGetCurrency from '../../hooks/useGetCurrency'
// import useCartOnMobile from '../WebRoutes/Products/hooks/useCartOnMobile'
// import useCategoryFilter from '../WebRoutes/Products/hooks/useCategoryFilter'
import * as themes from "Themes/exportTheme";
import useFilterProducts from "hooks/useFilterProducts";

const ActionBar = ({ t, mayFetch, shop, totalPrice = 100, ...rest }) => {
  const muiTheme = useTheme();
  // const { shop } = useShopInfoContext();
  const { categories, key, preferences } = shop || {};
  const filters = useFilterProducts();
  const searchValue = filters.name;

  // const {
  //   toggleDrawer,
  //   icon: CartIcon,
  //   drawer: CartDrawer,
  //   quantity
  // } = useCartOnMobile({
  //   t
  // })
  // const {
  //   currency: { symbol: currencySymbol }
  // } = useGetCurrency()
  // const {
  //   state: { totalPrice }
  // } = useCartStore()
  const totalPriceCart = parseFloat(totalPrice).toFixed(2);

  const show_categories_alternative_way = get(
    "show_categories_alternative_way",
    preferences
  );

  const hasCategories = categories?.length > 0;

  const hideCategoryFilter =
    categories && categories.length > 0 && show_categories_alternative_way;

  const isFilter = !hideCategoryFilter && hasCategories;

  // const {
  //   drawer: FilterDrawer,
  //   toggleFilters,
  //   activeFilters
  // } = useCategoryFilter(categories, isFilter, key, mayFetch, t)

  const breakpointsDownMd = useMediaQuery(muiTheme.breakpoints.down("md"));

  const { name } = useTheme();
  const { CustomizedActionBar: View } = themes[name] || {};

  const props = {
    t,
    isFilter,
    breakpointsDownMd,
    //FilterDrawer,
    //toggleFilters,
    //activeFilters,
    //toggleCartDrawer: toggleDrawer,
    //currencySymbol,
    //CartIcon,
    totalPriceCart,
    searchValue,
    //quantity,
    ...rest,
  };

  return (
    <React.Fragment>
      <View {...props} /> {/* {CartDrawer} */}
    </React.Fragment>
  );
};

export default memo(ActionBar);
