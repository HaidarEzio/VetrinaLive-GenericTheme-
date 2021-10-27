import React, { memo } from "react";
import { useTheme } from "@material-ui/styles";
// import useRegisterModal from "../../hooks/useRegisterModal";
// import useIsNativeApp from "../../hooks/useIsNativeApp";
// import useIsMobile from "../../hooks/useIsMobile";
import * as themes from "Themes/exportTheme";
// import useToggler from "../../hooks/useToggler";
// import { MODALS_ID } from "../../utils/const";

const ShopHeader = ({ className, topBanner, logoUrl, shop, ...props }) => {
  // const isMobile = useIsMobile();
  const topBarEnabled = Boolean(Number(topBanner?.is_enabled));
  const { name } = useTheme();
  const { ShopHeader: ThemeShopHeader } = themes[name] || {};
  // const { modal: RegisterModal, toggleModal } = useRegisterModal(t);

  // const { toggle: toggleNavigation } = useToggler(MODALS_ID.NAVIGATION);

  const rest = {
    shop,
    logoUrl,
    // isMobile,
    className,
    topBanner,
    // toggleAccountModal: toggleModal,
    // isNativeApp,
    topBarEnabled,
    // toggleNavigation,
    // registerShopPromoFeature,
    ...props,
  };

  return (
    <React.Fragment>
      <ThemeShopHeader {...rest} />
      {/* {RegisterModal} */}
    </React.Fragment>
  );
};

export default memo(ShopHeader);
