import { useCallback, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import isEmpty from "lodash/fp/isEmpty";
import { useDebouncedCallback } from "use-debounce";
import useSearchQuery from "hooks/useSearchQuery";
import useFilterProducts from "hooks/useFilterProducts";
import { storeItems } from "Utils/utils";
import { ROUTES } from "Utils/utils";

function useSearchProducts() {
  const [value, setValue] = useState("");
  const filters = useFilterProducts();
  const search = filters.name;
  const router = useRouter();
  const {
    query: { shopKey },
    pathname,
  } = router;

  const storeSearchProducts = useCallback(
    (value) => {
      storeItems(value, shopKey, "search-products");
    },
    [shopKey]
  );

  const { insertSearchQuery, deleteSearchQuery } = useSearchQuery();
  const [debounceFunction] = useDebouncedCallback(() => {
    if (isEmpty(value)) {
      storeSearchProducts(null);
      return deleteSearchQuery("search");
    }
    storeSearchProducts(value);

    if (pathname !== ROUTES.PRODUCTS) {
      const query = { search: value };
      Router.push(
        {
          pathname: ROUTES.PRODUCTS,
          query,
        },
        {
          pathname: ROUTES.PRODUCTS.replace("[shopKey]", shopKey),
          query,
        }
      );
    } else {
      insertSearchQuery({
        key: "search",
        value,
      });
    }
  }, 1000);

  const handleChange = useCallback(
    (e) => {
      const { value: v } = e.target;
      setValue(v);
      debounceFunction(v);
    },
    [debounceFunction]
  );

  // TODO this function will be implemented later
  // const handleKeyPress = useCallback(
  //   (e) => {
  //     if (e.key?.toLowerCase() === 'enter' && name) {
  //       handleSubmit()
  //     }
  //   },
  //   [name, handleSubmit]
  // )

  // set value on page refresh
  useEffect(() => {
    if (!isEmpty(search)) {
      setValue(search);
      storeSearchProducts(search);
    } else {
      setValue("");
      storeSearchProducts(null);
    }
    // eslint-disable-next-line
  }, [search]);

  return { handleChange, value };
}

export default useSearchProducts;
