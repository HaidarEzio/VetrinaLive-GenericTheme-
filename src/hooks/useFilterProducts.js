import { isServer } from "Utils/utils";
import { useLocation } from "./useLocation";
import queryString from "query-string";

function getPublishedStatus(published) {
  switch (published) {
    case "yes":
      return 1;
    case "no":
      return 0;
    default:
      return undefined;
  }
}

function useFilterProducts() {
  const location = useLocation();
  const parsed = !isServer() ? queryString.parse(location.search) : {};
  const { category, published, search: name, page, scroll } = parsed;
  return {
    category,
    is_published: getPublishedStatus(published),
    name,
    page,
    scroll,
  };
}

export default useFilterProducts;
