import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PromoPackagesCard from 'ReusableThemes/ReusablePromoPackage/Card/ViewNew'
import useIsMobile from 'hooks/useIsMobile'
import CardDescription from 'ReusableThemes/ReusablePromoPackage/Card/components/CardDescription'
import CardTitleView from 'ReusableThemes/ReusablePromoPackage/Card/components/CardTitle/CardTitle'
import CardButton from 'ReusableThemes/ReusablePromoPackage/Card/components/CardButton'
import CardPictures from 'ReusableThemes/ReusablePromoPackage/Card/components/CardPictures/CardPictures'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(3),
    background: theme.palette.colors.beige,
    display: 'flex',
    width: 558,
    maxWidth: 558,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      maxWidth: '90%'
    },
    [theme.breakpoints.down(390)]: {
      padding: theme.spacing(1)
    }
  },
  item: {
    width: '33%',
    marginTop: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  picturesRoot: {
    display: 'flex',
    width: '66%',
    marginLeft: 15,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
      marginBottom: theme.spacing(2)
    }
  },
  picture: ({ productsNumber }) => ({
    width: productsNumber ? '100%' : 165,
    height: 259,
    margin: '0 2px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    [theme.breakpoints.down('sm')]: {
      height: 199
    },
    [theme.breakpoints.down(390)]: {
      width: 150
    }
  }),
  title: theme.title({
    fontSize: 24,
    lineHeight: '32px',
    color: theme.palette.colors.black[0],
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    whiteSpace: 'normal'
  }),
  description: {
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.colors.black[0]
  },
  btn: {
    maxWidth: 107
  }
}))

const View = (props) => {
  const { promoPackage, shopKey, products, t } = props
  const isMobile = useIsMobile()
  const filteredProducts = products.slice(0, 2)
  const classes = useStyles({
    isMobile,
    productsNumber: filteredProducts.length
  })
  const theme = useTheme()

  return (
    <PromoPackagesCard
      sm={6}
      _classes={{
        card: classes.card
      }}
    >
      <>
        <div className={classes.item}>
          <CardDescription
            description={promoPackage.description}
            className={classes.description}
          />
          <CardTitleView title={promoPackage.name} className={classes.title} />
          <CardButton
            backgroundColor={theme.palette.secondary.main}
            shopKey={shopKey}
            className={classes.btn}
            t={t}
            promoPackageId={promoPackage.id}
          />
        </div>
        <CardPictures
          filteredProducts={filteredProducts}
          picturesClassName={classes.picturesRoot}
          pictureClassName={classes.picture}
        />
      </>
    </PromoPackagesCard>
  )
}

export default View
