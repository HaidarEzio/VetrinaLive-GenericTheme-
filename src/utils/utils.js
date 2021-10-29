import isEmpty from "lodash/fp/isEmpty";

export const DEFAULT_THEME = "default_theme";
export const TOP_BAR_Z_INDEX = 115;

export const ROUTES = {
  ACCOUNT: "/account",
  EDIT_PROFILE: "/edit-profile",
  ORDERS_HISTORY: "/orders-history",
  ADDRESSES: "/addresses",
  PRODUCTS: "/[shopKey]/products",
};

export const themesList = [
  {
    name: "Default Theme (not implemented)",
    id: DEFAULT_THEME,
  },
  {
    name: "Clothing Theme",
    id: "clothing_1",
  },
];

export const isServer = () => typeof window === "undefined";

export const notNull = (value) =>
  value && value !== "null" && value !== "undefined" && value !== "";

export const usedTheme = (id) => themesList.find((x) => x.id === id);

export function generateInstagramUrl(link) {
  let url = link;
  let username = "";

  if (link && link.includes("/")) {
    username = getLastSentenceBySymbol({ symbol: "/", link });
  } else if (link && link.includes("@")) {
    username = getLastSentenceBySymbol({ symbol: "@", link });
  } else if (link && !link.includes("/")) {
    username = link;
  }

  if (
    !isEmpty(username) &&
    !username.includes("/") &&
    !username.includes("@")
  ) {
    return `https://instagram.com/${username}`;
  }

  return url;
}

export function generateFacebookUrl(link) {
  let url = link;

  if (link && !link.includes("http")) {
    url = `https://${url}`;
  }

  if (link && !link.includes("/")) {
    url = `https://facebook.com/${link}`;
  }

  return url;
}

export function generateUrl(props) {
  const { link, format } = props;
  switch (format) {
    case "facebook":
      return generateFacebookUrl(link);
    case "instagram":
      return generateInstagramUrl(link);
    default:
      return link;
  }
}

export const storeItems = (newItem, shopId, key = "cart") => {
  if (newItem) {
    localStorage.setItem(`${key}-${shopId}`, JSON.stringify(newItem));
  } else localStorage.removeItem(`${key}-${shopId}`);
};

export function isRichText(string = "") {
  return string.includes('"entityMap"');
}

export function percentageDifference(a, b) {
  const decreaseValue = a - b;
  return Math.round((decreaseValue / a) * 100);
}

export const sliceDescription = (text, limit = 110) => {
  if (text && text.length > limit) {
    return `${text.slice(0, limit - 5)}...`;
  }
  return text;
};
