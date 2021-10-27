import React from "react";
import { Grid } from "@material-ui/core";
import CustomDrawer from "Components/CustomDrawer";

const NewNavigationDrawer = ({ t, isOpened, toggle, customClasses, items }) => {
  return (
    <CustomDrawer
      title="Navigation"
      backArrowText={t("close")}
      open={isOpened}
      onClose={toggle}
      customClassRoot={customClasses?.root}
    >
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        className={customClasses?.navigation}
      >
        {items}
      </Grid>
    </CustomDrawer>
  );
};

export default NewNavigationDrawer;
