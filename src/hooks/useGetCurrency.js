import { useMemo } from "react";
import currSymbols from "currency-icons";
import get from "lodash/fp/get";

function useGetCurrency({ shop }) {
  const defaultCurrency = useMemo(() => {
    return { symbol: "€", code: "EUR" };
  }, []);

  return useMemo(() => {
    const symbol = get([shop?.currencyCode, "symbol"], currSymbols);

    if (symbol) {
      return {
        currency: {
          code: shop?.currencyCode,
          symbol,
        },
      };
    }

    return {
      currency: {
        ...defaultCurrency,
      },
    };
  }, [shop?.currencyCode, defaultCurrency]);
}

export default useGetCurrency;
