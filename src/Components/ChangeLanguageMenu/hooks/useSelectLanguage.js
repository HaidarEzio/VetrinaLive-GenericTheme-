import React, { useCallback, useMemo } from "react";
import ReactCountryFlag from "react-country-flag";
// import { i18n } from '../../../../i18n'
// import useCurrentLng from './useCurrentLng'

const useSelectLanguage = (t, currentLanguage = "it") => {
  // const currentLanguage = useCurrentLng()
  // const changeLanguage = useCallback((lng) => {
  //   localStorage.setItem('lng', lng)
  //   i18n.changeLanguage(lng)
  // }, [])

  const options = useMemo(
    () => [
      {
        value: "it",
        title: t("italian"),
        icon: () => <ReactCountryFlag countryCode="it" svg />,
        //action: () => changeLanguage('it'),
        action: () => {},
        isSelected: "it" === currentLanguage,
      },
      {
        value: "en",
        title: t("english"),
        icon: () => <ReactCountryFlag countryCode="gb" svg />,
        // action: () => changeLanguage('en'),
        action: () => {},
        isSelected: "en" === currentLanguage,
      },
    ],
    [t, currentLanguage]
  );

  const selectedOption = useMemo(() => {
    return options.find((i) => i.value === currentLanguage);
  }, [currentLanguage, options]);

  return {
    // changeLanguage,
    options,
    selectedOption,
  };
};

export default useSelectLanguage;
