import React from "react";
import dynamic from "next/dynamic";
import FullScreenLoader from "Components/FullScreenLoader";
import { withTranslation } from "react-i18next";

const LayoutRoute = dynamic(() => import("../src/Components/Layout"), {
  loading: () => <FullScreenLoader />,
});

const LayoutPage = (props) => {
  return <LayoutRoute {...props} />;
};

export default withTranslation("common")(LayoutPage);
