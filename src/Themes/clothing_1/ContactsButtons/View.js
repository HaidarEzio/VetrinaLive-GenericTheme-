import React, { memo } from "react";
import cn from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FacebookIcon from "Icons/OutlinedSocials/Facebook";
import InstagramIcon from "Icons/OutlinedSocials/Instagram";
import PhoneIcon from "Icons/OutlinedSocials/Phone";
import WhatsAppIcon from "Icons/OutlinedSocials/WhatsApp";
import IfSocialLink from "./components/IfSocialLink";

const useStyle = makeStyles(() => ({
  socialLinks: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridGap: 18,
    width: "calc( 100% - 18px )",
  },
}));

const View = ({
  facebook_url,
  instagram_url,
  whatsappUrl,
  phoneNumber,
  className = {},
  t,
}) => {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <div className={cn(classes.socialLinks, className)}>
      <IfSocialLink
        link={phoneNumber}
        backgroundColor={theme.palette.primary.main}
        title={t("call_shop")}
      >
        <PhoneIcon />
      </IfSocialLink>

      <IfSocialLink
        link={whatsappUrl}
        backgroundColor={theme.palette.colors.green.contact}
        title={t("contact")}
      >
        <WhatsAppIcon />
      </IfSocialLink>

      <IfSocialLink
        link={instagram_url}
        format="instagram"
        title={t("follow")}
        backgroundColor={theme.palette.colors.lila}
      >
        <InstagramIcon />
      </IfSocialLink>

      <IfSocialLink
        link={facebook_url}
        format="facebook"
        title={t("visit")}
        backgroundColor={theme.palette.colors.blue.fb}
      >
        <FacebookIcon />
      </IfSocialLink>
    </div>
  );
};

export default memo(View);
