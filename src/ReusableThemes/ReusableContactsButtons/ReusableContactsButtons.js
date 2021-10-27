import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "Icons/OutlinedSocials/Instagram";
import PhoneIcon from "Icons/OutlinedSocials/Phone";
import WhatsAppIcon from "Icons/OutlinedSocials/WhatsApp";
import IfSocialLink from "./components/IfSocialLink";
import FacebookIcon from "Icons/Social/Facebook";

const useStyles = makeStyles(() => ({
  icon: {
    height: 16,
    width: 16,
  },
  socialContainer: {
    marginLeft: 8,
    display: "flex",
  },
}));

const ReusableContactsButtons = ({
  phoneNumber,
  whatsapp_number,
  instagram_url,
  facebook_url,
  customClasses,
  iconColor,
}) => {
  const classes = useStyles();
  const whatsappUrl = whatsapp_number
    ? `https://wa.me/${whatsapp_number.replace(/\D+/g, "")}`
    : null;

  return (
    <div
      className={clsx(classes.socialContainer, customClasses?.socialContainer)}
    >
      <IfSocialLink link={whatsappUrl} customClasses={customClasses}>
        <WhatsAppIcon
          fill={iconColor}
          className={clsx(classes.icon, customClasses?.icon)}
        />
      </IfSocialLink>
      <IfSocialLink link={facebook_url} format="facebook">
        <FacebookIcon
          fill={iconColor}
          className={clsx(classes.icon, customClasses?.icon)}
        />
      </IfSocialLink>
      <IfSocialLink
        link={instagram_url}
        customClasses={customClasses}
        format="instagram"
      >
        <InstagramIcon
          fill={iconColor}
          className={clsx(classes.icon, customClasses?.icon)}
        />
      </IfSocialLink>
      <IfSocialLink
        format="phone"
        link={phoneNumber}
        customClasses={customClasses}
      >
        <PhoneIcon
          fill={iconColor}
          className={clsx(classes.icon, customClasses?.icon)}
        />
      </IfSocialLink>
    </div>
  );
};

export default ReusableContactsButtons;
