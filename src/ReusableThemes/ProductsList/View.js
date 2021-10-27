import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InfiniteScroll from 'react-infinite-scroller'
import Grid from '@material-ui/core/Grid'
import FullScreenLoader from '../../../src/components/FullScreenLoader'
import LoadMoreLoader from '../../../src/components/LoadMoreLoader'
import NoProducts from '../../../src/components/ProductsList/components/NoProducts'
import Container from '../../../src/components/Container'
import ProductsHeader from '../../../src/components/ProductsHeader'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px 0'
  },
  loadingRoot: {
    height: 390,
    width: '100%'
  },
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
  loader: {
    position: 'relative',
    paddingBottom: 80
  }
}))

const View = ({
  t,
  Card,
  loadMore,
  loading,
  products,
  hasNextPage,
  _classes
}) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.root, _classes?.root)}>
      <Container>
        <ProductsHeader t={t} />
        <Products
          t={t}
          Card={Card}
          loading={loading}
          loadMore={loadMore}
          products={products}
          _classes={_classes}
          hasNextPage={hasNextPage}
        />
      </Container>
    </div>
  )
}

const Products = ({
  loadMore,
  hasNextPage,
  products,
  Card,
  loading,
  t,
  _classes
}) => {
  const classes = useStyles()

  const isNoProducts = !products || products.length === 0

  if (loading) {
    return (
      <div className={classes.loadingRoot}>
        <FullScreenLoader />
      </div>
    )
  }

  if (isNoProducts) return <NoProducts t={t} />

  return (
    <InfiniteScroll
      loader={<LoadMoreLoader id="infinite-scroll-loader" />}
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasNextPage}
      useWindow={true}
      className={classes.loader}
      threshold={10}
    >
      <Grid container className={cn(classes.grid, _classes?.grid)}>
        {products.map((product) => (
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            key={product.id}
            className={cn(classes.card, _classes?.card)}
          >
            <Card {...product} productKey={product.key} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default memo(View)
