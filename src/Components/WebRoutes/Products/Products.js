import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useFilterProducts from 'hooks/useFilterProducts'
import { useLayoutProvider } from '../../LayoutProvider/context'
import useCheckStoredFilters from './hooks/useCheckStoredFilters'
import { useShopInfoContext } from '../../../context/ShopInfoStore/context'
import dynamic from 'next/dynamic'
import ComponentLoader from '../../ComponentLoader'
const ProductsList = dynamic(() => import('../../ProductsList'), {
  loading: () => <ComponentLoader />
})

const useStyle = makeStyles(() => ({
  root: {
    width: '100%'
  },
  productRoot: {
    width: '100%',
    position: 'relative',
    zIndex: 3
  }
}))

const ProductsRoute = ({ t }) => {
  const classes = useStyle()

  const { shop } = useShopInfoContext()

  const { key } = shop || {}

  const filters = useFilterProducts()

  const { showFeaturedProducts } = useLayoutProvider()

  const { mayFetch } = useCheckStoredFilters(key)

  return (
    <div className={classes.root}>
      <div className={classes.productRoot}>
        <ProductsList
          t={t}
          filters={filters}
          mayFetch={mayFetch}
          showFeaturedProducts={showFeaturedProducts}
        />
      </div>
    </div>
  )
}

export default memo(ProductsRoute)
