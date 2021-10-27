import React from 'react'
import Container from '../../../src/components/Container/Container'
import Header from '../../../src/components/ProductDetailed/components/Header'
import { Grid, useMediaQuery } from '@material-ui/core'
import Banner from '../../../src/components/ProductDetailed/components/Banner'
import Details from '../../../src/components/ProductDetailed/components/Details'
import Related from '../../../src/components/ProductDetailed/components/Related'
import VideoModal from '../../../src/components/ProductDetailed/components/VideoModal'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    padding: '50px 0 70px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 0 50px'
    }
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      minHeight: '100vh'
    }
  }
}))

const View = ({
  //props
  product,
  deviceType,
  returnToVetrina,
  t,
  isPromoPackage,
  hasManyRelatedProducts,
  shop,

  // single product
  handleClickThumbnailVideo,
  picturesControl,
  withDiscount,
  addItemToCart,
  actionRequired,
  touched,
  onChange,
  customization,
  variantIndex,
  handleOpen,
  open,
  handleClose,
  relatedProductsFeature,
  related_products,
  productVideoHook,

  // customizations
  withHeader = true,
  withBackBtn = true,
  _classes
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const breakpointsDownXs = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <div className={cn(classes.root, _classes?.root)}>
      <Container>
        {!breakpointsDownXs && withHeader && (
          <Header
            product={product}
            withBackBtn={withBackBtn}
            returnToVetrina={returnToVetrina}
            t={t}
            _classes={_classes?.header}
          />
        )}
        <Grid container className={cn(classes.container, _classes?.container)}>
          <Banner
            onClickThumbnailVideo={handleClickThumbnailVideo}
            isPromoPackage={isPromoPackage}
            selectedIdx={picturesControl.index}
            onSelectImageIdx={picturesControl.onSetIdx}
            arrowsControl={picturesControl.arrowsControl}
            deviceType={deviceType}
            product={product}
            returnToVetrina={returnToVetrina}
            t={t}
            _classes={_classes?.banner}
          />
          <Details
            onSelectImageIdx={picturesControl.onSetIdx}
            withDiscount={withDiscount}
            addItemToCart={addItemToCart}
            actionRequired={actionRequired}
            touched={touched}
            onChange={onChange}
            customizationProps={customization}
            variantIndex={variantIndex}
            handleOpen={handleOpen}
            open={open}
            handleClose={handleClose}
            product={product}
            returnToVetrina={returnToVetrina}
            t={t}
            _classes={_classes?.details}
          />
          {hasManyRelatedProducts &&
            relatedProductsFeature &&
            related_products &&
            product?.category && (
              <Related
                deviceType={deviceType}
                shopId={shop.id}
                product={product}
                t={t}
                _classes={_classes?.related}
              />
            )}
        </Grid>
      </Container>
      <VideoModal
        open={productVideoHook.open}
        url={productVideoHook.url}
        onClose={productVideoHook.onResetAll}
      />
    </div>
  )
}

export default View
