import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Container from '../../../../src/components/Container/Container'
import CustomButton from '../../../../src/components/CustomButton/CustomButton'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0'
    }
  },
  title: theme.title({
    fontSize: 24,
    lineHeight: '32px',
    marginBottom: 40,
    textAlign: 'center'
  }),
  grid: {
    margin: '0 -12px 16px',
    width: 'calc(100% + 24px)',
    [theme.breakpoints.down('xs')]: {
      margin: '0 -8px 16px',
      width: 'calc(100% + 16px)',
      padding: '0 15px'
    }
  },
  card: {
    padding: '0 12px 24px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 8px 24px'
    }
  },
  button: {
    width: 'auto'
  }
}))

const Products = ({
  withTitle,
  children,
  products,
  showButton,
  shopKey,
  t,
  Card,
  limit = 4,
  customClasses
}) => {
  const classes = useStyles()
  return (
    <section className={clsx(classes.root, customClasses?.root)}>
      <Container>
        {withTitle && (
          <Typography className={clsx(classes.title, customClasses?.title)}>
            {t('products')}
          </Typography>
        )}
        {children}
        <Grid container className={clsx(classes.grid, customClasses?.grid)}>
          {products.slice(0, limit).map((product) => (
            <Grid
              item
              xs={6}
              md={4}
              lg={3}
              key={product.id}
              className={clsx(classes.card, customClasses?.card)}
            >
              <Card {...product} productKey={product.key} />
            </Grid>
          ))}
        </Grid>
        {showButton && (
          <Grid container justify="center">
            <CustomButton
              type="link"
              href="/[shopKey]/products"
              as={`/${shopKey}/products`}
              label={t('view_products')}
              className={clsx(classes.button, customClasses?.button)}
              labelClassName={customClasses?.buttonLabel}
            />
          </Grid>
        )}
      </Container>
    </section>
  )
}

export default Products
