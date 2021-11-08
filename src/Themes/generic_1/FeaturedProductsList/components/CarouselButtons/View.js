import React from 'react'
import ReusableCarouselButtons from 'ReusableThemes/FeaturedProductsList/components/CarouselButtons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  arrowsBtn: {
    top: 200,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      opacity: 0.9,
      backgroundColor: theme.palette.secondary.main
    }
  },
  arrows: {
    color: theme.palette.colors.white
  }
}))

const CarouselButtons = (props) => {
  const classes = useStyles()
  const { _classes = {}, ...rest } = props
  return (
    <ReusableCarouselButtons
      _classes={{
        arrowsBtn: classes.arrowsBtn,
        arrows: classes.arrows,
        ..._classes
      }}
      {...rest}
    />
  )
}

export default CarouselButtons
