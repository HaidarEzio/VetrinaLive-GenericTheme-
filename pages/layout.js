import React from "react";
import dynamic from "next/dynamic";
import FullScreenLoader from "Components/FullScreenLoader";
import { withTranslation } from "react-i18next";

//! start loading the layout comp, while it's waiting send out the loader
const LayoutRoute = dynamic(() => import("../src/Components/Layout"), {
  loading: () => <FullScreenLoader />,
});

//* Redirecting component to the actual layout
const LayoutPage = (props) => {
  return <LayoutRoute {...props} />;
};

//! for translation 
export default withTranslation("common")(LayoutPage);
