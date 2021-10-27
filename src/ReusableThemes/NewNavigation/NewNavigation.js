import React, { memo } from "react";
import useNavigationLinks from "./hooks/useNavigationLinks";
// import { MODALS_ID } from '../../utils/const'
// import useToggler from '../../hooks/useToggler'
import NewNavigationBody from "./components/NewNavigationBody/NewNavigationBody";

const NewNavigation = ({ customClasses, returnToVetrina = null, t }) => {
  const { links, goTo } = useNavigationLinks({ returnToVetrina, t });

  // const { toggle, isOpened } = useToggler(MODALS_ID.NAVIGATION)

  const props = {
    t,
    customClasses,
    links,
    goTo,
    //toggle,
    //isOpened,
  };

  return <NewNavigationBody {...props} />;
};

export default memo(NewNavigation);
