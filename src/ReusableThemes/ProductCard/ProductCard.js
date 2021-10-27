import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import clsx from 'clsx'
import CardHeader from './components/CardHeader/View'
import CardBody from './components/CardBody/View'

const useStyles = makeStyles(() => ({
  cardRoot: {
    cursor: 'pointer',
    position: 'relative',
    boxShadow: 'none',
    background: 'transparent',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0
  },
  isNotAvailable: {
    opacity: 0.5
  }
}))

const ProductCard = (props) => {
  const classes = useStyles()
  const {
    isAvailableProduct,
    openSingleProdPage,
    discountProcent,
    category,
    getMainProductPicture,
    productName,
    isFeaturedProduct,
    cardBody,
    _classes,
    showCategoryLabel = false,
    ...rest
  } = props

  return (
    <>
      <Card
        className={clsx(classes.cardRoot, _classes?.cardRoot, {
          [classes.isNotAvailable]: !isAvailableProduct
        })}
        onClick={() => openSingleProdPage()}
      >
        <CardHeader
          discountProcent={discountProcent}
          category={category}
          showCategoryLabel={showCategoryLabel}
          image_url={getMainProductPicture['500x600']}
          image_thumbnail_url={getMainProductPicture['50x50']}
          name={productName}
          isFeaturedProduct={isFeaturedProduct}
          _classes={_classes}
        />
        <CardBody
          isAvailableProduct={isAvailableProduct}
          imageUrl={getMainProductPicture['50x50']}
          openSingleProdPage={openSingleProdPage}
          _classes={_classes}
          {...rest}
          {...cardBody}
        />
      </Card>
    </>
  )
}

export default ProductCard
