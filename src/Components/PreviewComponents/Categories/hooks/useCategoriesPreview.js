import { useCallback } from 'react'
import Router from 'next/router'

function useCategoriesPreview({ shopKey }) {
  const onClick = useCallback(
    (id) => {
      const query = { category: id }
      Router.push(
        {
          pathname: `/[shopKey]/products`,
          query
        },
        {
          pathname: `/${shopKey}/products`,
          query
        }
      )
    },
    [shopKey]
  )

  const showAllCategories = useCallback(
    () => Router.push(`/[shopKey]/categories`, `/${shopKey}/categories`),
    [shopKey]
  )
  return { onClick, showAllCategories }
}

export default useCategoriesPreview
