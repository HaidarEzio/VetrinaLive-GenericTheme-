import React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CustomLink from '../../../components/CustomLink'
import CustomButton from '../../../components/CustomButton/CustomButton'
import getOr from 'lodash/fp/getOr'
import noPreview from '../../../../public/imgs/nopreview.png'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 12px 40px'
  },
  card: {
    minHeight: 310,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      minHeight: 390
    }
  },
  item: {},
  picturesRoot: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 200,
      marginBottom: 15
    }
  },
  picture: {
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  title: {},
  description: {},
  btn: {
    width: 'auto'
  },
  price: {}
}))

const View = ({
  sm,
  t,
  currency,
  promoPackage,
  products,
  shopKey,
  maxPics,
  _classes,
  showTitle,
  showDescription,
  showBuyButton,
  showPrice
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const filteredProducts = products?.slice(0, maxPics)
  return (
    <Grid item sm={sm} className={clsx(classes.root, _classes?.root)}>
      <div className={clsx(classes.card, _classes?.card)}>
        <div className={clsx(classes.item, _classes?.item)}>
          {showDescription && (
            <Typography
              noWrap
              className={clsx(classes.description, _classes?.description)}
            >
              {promoPackage.description}
            </Typography>
          )}
          <Typography noWrap className={clsx(classes.title, _classes?.title)}>
            {promoPackage.name}
          </Typography>
          {showPrice && (
            <Typography noWrap className={clsx(classes.price, _classes?.price)}>
              {currency}{' '}
              {Number.parseFloat(promoPackage.promo_price).toFixed(2)}
            </Typography>
          )}

          {showBuyButton && (
            <CustomLink
              href="/[shopKey]/packages/[packageId]"
              as={`/${shopKey}/packages/${promoPackage.id}`}
            >
              <CustomButton
                className={classes.btn}
                backgroundColor={theme.palette.secondary.main}
                label={t('shop_now')}
              />
            </CustomLink>
          )}
        </div>
        <div className={clsx(classes.picturesRoot, _classes?.picturesRoot)}>
          {filteredProducts.map((p) => {
            const src = getOr(noPreview, '1000x1200', p.pictures[0])
            const id = getOr(noPreview, 'id', p.pictures[0])
            return (
              <div className={clsx(classes.picture, _classes?.picture)}>
                <img key={id} src={src} alt={id} />
              </div>
            )
          })}
        </div>
      </div>
    </Grid>
  )
}

export default View
