import queryString from "query-string";
import isEmpty from "lodash/isEmpty";
import isArray from "lodash/fp/isArray";
import { isServer } from "Utils/utils";

function useSearchQuery() {
  // TODO: Please dont't remove "addParams" function
  // function addParams(pathname, query) {
  //   Router.push(
  //     {
  //       pathname: `/[shopKey]`,
  //       query: query,
  //     },
  //     {
  //       pathname: `/${pathname}`,
  //       query: query,
  //     }
  //   );
  // }

  function addParams(search) {
    // eslint-disable-next-line no-restricted-globals
    if (!isServer() && history) {
      var newRelativePathQuery =
        window.location.pathname + `${!isEmpty(search) ? "?" : ""}` + search;
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, "", newRelativePathQuery);
      window.dispatchEvent(new Event("hashchange", { bubbles: true }));
    }
  }

  function toggleValueToQuery({
    queryKey,
    newValue,
    valueToExcludeFromTheArrayOfSameKeys = null,
  }) {
    const parsedSearch =
      !isServer() && queryString.parse(window.location.search);
    const { shopKey, ...currentSearchObj } = parsedSearch || {};
    const currentQueryValue = currentSearchObj[queryKey];
    if (!currentQueryValue) {
      // INSERT NEW QUERY
      return insertSearchQuery({
        key: queryKey,
        value: newValue,
      });
    }

    let newSearchString = "";
    const arrayOfCurrentQuery = Array.isArray(currentQueryValue)
      ? currentQueryValue
      : [currentQueryValue];

    if (arrayOfCurrentQuery) {
      if (arrayOfCurrentQuery.includes(newValue)) {
        currentSearchObj[queryKey] = arrayOfCurrentQuery.filter(
          (val) => val !== newValue
        );
        newSearchString = queryString.stringify(currentSearchObj);
      } else {
        currentSearchObj[queryKey] = Array.isArray(newValue)
          ? newValue
          : [...arrayOfCurrentQuery, newValue];
        if (valueToExcludeFromTheArrayOfSameKeys) {
          const index = currentSearchObj[queryKey].findIndex(
            (str) => str === valueToExcludeFromTheArrayOfSameKeys
          );
          delete currentSearchObj[queryKey][index];
        }
        newSearchString = queryString.stringify(currentSearchObj);
      }
    }
    return addParams(newSearchString);
  }

  function insertSearchQuery(props) {
    const parsedSearch =
      !isServer() && queryString.parse(window.location.search);
    const { shopKey, ...rest } = parsedSearch || {};
    const { key, value } = props;
    const newParsedSearch = {
      ...rest,
      [key]: value,
    };
    const search = queryString.stringify(newParsedSearch);
    addParams(search);
  }

  function insertSearchQueryWithDelete(props) {
    const { insert, deleteKey } = props;
    const parsedSearch =
      !isServer() && queryString.parse(window.location.search);
    const newParsedSearch = {
      ...parsedSearch,
      [insert.key]: insert.value,
    };
    delete newParsedSearch[deleteKey];
    const search = queryString.stringify(newParsedSearch);
    addParams(search);
    return search;
  }

  function insertSearchQueryMultiple(items = [], key) {
    const parsedSearch =
      !isServer() && queryString.parse(window.location.search);
    Object.filter = (obj) => {
      let keys = Object.keys(obj).filter((k) => k !== key);
      if (keys && keys.length > 0) {
        return Object.assign(...keys.map((k) => ({ [k]: obj[k] })));
      }
      return {};
    };

    const filtered = Object.filter(parsedSearch);
    let newParsedSearch = { ...filtered, [key]: items };
    const search = queryString.stringify(newParsedSearch);
    addParams(search);
  }

  function deleteSearchQuery(key) {
    const parsedSearch =
      !isServer() && queryString.parse(window.location.search);
    const { shopKey, ...rest } = parsedSearch || {};
    if (isArray(key)) {
      key.forEach((i) => {
        delete rest[i];
      });
    } else delete rest[key];
    const search = queryString.stringify(rest);
    addParams(search);
    return search;
  }

  function deleteSearchQueryMultiple(keys = []) {
    const parsed = !isServer() && queryString.parse(window.location.search);
    keys.forEach((key) => {
      if (isArray(key)) {
        key.forEach((i) => {
          delete parsed[i];
        });
      } else delete parsed[key];
    });
    const search = queryString.stringify(parsed);
    addParams(search);
    return search;
  }

  return {
    deleteSearchQueryMultiple,
    insertSearchQuery,
    insertSearchQueryWithDelete,
    deleteSearchQuery,
    toggleValueToQuery,
    insertSearchQueryMultiple,
  };
}

export default useSearchQuery;
