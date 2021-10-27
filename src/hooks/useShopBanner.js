import { useCallback } from "react";
import * as deafultCover from "Utils/background";

function useShopBanner(key = "it") {
  return useCallback(
    (category) => {
      if (category) {
        const selectedCategory = deafultCover.list.filter((i) => {
          let item = i.toLowerCase();
          let name = category[key].toLowerCase();
          return item.includes(name) || name.includes(item);
        });
        if (selectedCategory && selectedCategory.length > 0) {
          return deafultCover[selectedCategory[0]];
        }
        return deafultCover["altro"];
      }
      return deafultCover["altro"];
    },
    [key]
  );
}

export default useShopBanner;
