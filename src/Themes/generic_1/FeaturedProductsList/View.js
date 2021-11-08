import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReusableFeaturedProductsList from 'ReusableThemes/FeaturedProductsList'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px 0'
  },
  carouselRoot: {
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 30
    }
  },
  title: theme.title({
    fontSize: 24,
    lineHeight: '32px',
    marginBottom: 40
  }),
  grid: {},
  carouselContainer: {
    justifyContent: 'initial'
  },
  card: {}
}))

const FeaturedProductsList = (props) => {
  const classes = useStyles()

  return (
    <ReusableFeaturedProductsList
      withTitle
      _classes={{
        root: classes.root,
        carouselRoot: classes.carouselRoot,
        title: classes.title,
        grid: classes.grid,
        carouselContainer: classes.carouselContainer,
        card: classes.card
      }}
      {...props}
    />
  )
}

export default FeaturedProductsList
