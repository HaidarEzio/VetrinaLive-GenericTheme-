import { useCallback, useEffect, useRef } from "react";
import { isRichText, isServer } from "Utils/utils";

function useCardBody(props) {
  const {
    id,
    name,
    price,
    colors,
    weights,
    addItem,
    variants,
    imageUrl,
    quantity,
    productKey,
    discounted_price,
    is_price_variable,
    description,
  } = props;

  const titleRef = useRef(null);

  // to cut title if it's longer than 2 lines
  useEffect(() => {
    if (!isServer() && titleRef) {
      const lines = 2;
      const lineHeight = 20;
      const truncateElement = titleRef.current;
      const truncateText = truncateElement?.textContent;
      const truncateTextParts = truncateText?.split(" ");
      while (lines * lineHeight < truncateElement?.clientHeight) {
        truncateTextParts.pop();
        truncateElement.innerHTML = truncateTextParts.join(" ") + "...";
      }
    }
  }, [titleRef]);

  const addItemToCart = useCallback(() => {
    addItem({
      key: productKey,
      id,
      image: imageUrl,
      name,
      price,
      disponibility: quantity,
      quantity: 1,
      is_price_variable,
      colors,
      weights,
      discounted_price,
      variants,
    });
  }, [
    addItem,
    productKey,
    id,
    imageUrl,
    name,
    price,
    quantity,
    is_price_variable,
    colors,
    weights,
    discounted_price,
    variants,
  ]);

  const _description = isRichText(description)
    ? JSON.parse(description)
        .blocks.map((block) => block.text)
        .join(" ")
    : description;

  return { addItemToCart, titleRef, _description };
}

export default useCardBody;
