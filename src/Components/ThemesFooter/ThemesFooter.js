import React, { useMemo } from "react";
import get from "lodash/fp/get";
import { notNull, number } from "Utils/utils";
import useNavigationLinks from "ReusableThemes/NewNavigation/hooks/useNavigationLinks";
import visa from "public/imgs/pay-with/visa.svg";
import mastercard from "public/imgs/pay-with/mastercard.svg";
import americanexpress from "public/imgs/pay-with/americanexpress.svg";
import paypalicon from "public/imgs/pay-with/paypalicon.svg";
import maestro from "public/imgs/pay-with/maestro.svg";
import ThemesFooterView from "ReusableThemes/ThemesFooter";

const ThemesFooter = ({ t, background, color, _classes, shop }) => {
  const { address, civic_number: civicNr, city, province, zipcode, phone, email, whatsapp_number, facebook_url, instagram_url } = shop;

  const bannerAuthor = get("banner_meta.banner_author_name", shop);
  const bannerAuthorLink = get("banner_meta.banner_author_link", shop);

  const getFullAddress = useMemo(() => {
    const addr = [address, civicNr, city, province, zipcode].filter((item) => notNull(item));
    return addr.length > 0 ? addr.join(", ") : null;
  }, [address, civicNr, city, province, zipcode]);

  const phoneNumber = number(phone) ? `tel:+${phone.replace(/\D+/g, "")}` : null;
  const whatsappUrl = number(whatsapp_number) ? `https://wa.me/${whatsapp_number.replace(/\D+/g, "")}` : null;

  const { links: menu, goTo } = useNavigationLinks({ t });

  const contacts = [
    {
      label: t("Contact"),
      isTitle: true,
    },
    getFullAddress && {
      label: `${t("Address")} : ${getFullAddress}`,
    },
    phone && {
      label: `${t("Phone")} : ${phone}`,
      href: phoneNumber,
    },
    email && {
      label: `${t("Email")} : ${email}`,
    },
  ].filter(Boolean);

  const socials = [
    {
      label: t("Social"),
      isTitle: true,
    },
    facebook_url && {
      label: "Facebook",
      href: facebook_url,
    },
    instagram_url && {
      label: "Instagram",
      href: instagram_url,
    },
    whatsapp_number && {
      label: "Whatsapp",
      href: whatsappUrl,
    },
  ].filter(Boolean);

  const pay_with = [
    {
      label: "Visa",
      img: visa,
    },
    {
      label: "MasterCard",
      img: mastercard,
    },
    {
      label: "AmericanExpress",
      img: americanexpress,
    },
    {
      label: "PayPal",
      img: paypalicon,
    },
    {
      label: "Maestro",
      img: maestro,
    },
  ].filter(Boolean);

  const props = {
    t,
    goTo,
    contacts,
    menu,
    socials,
    pay_with,
    bannerAuthor,
    bannerAuthorLink,
  };

  return <ThemesFooterView background={background} color={color} _classes={_classes} {...props} />;
};

/*
Structure of object
{
      label: '',
      isTitle: false,
      to: null,
      path: null,
      href: null,
      img: null
    }*/

export default ThemesFooter;
