import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import cn from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  arrows: {
    fontSize: 28,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 24
    }
  },
  arrowsBtn: {
    position: 'absolute',
    top: '35%',
    transition: 'opacity 0.3s ease-in-out',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: theme.palette.colors.white
    }
  },
  leftArrow: {
    left: 0,
    transform: 'translateX(-30%)'
  },
  rightArrow: {
    right: 0,
    transform: 'translateX(30%)'
  }
}))

const CarouselButtons = ({
  previous,
  next,
  _classes,
  RightIcon = ChevronRight,
  LeftIcon = ChevronLeft,
  withPrev = true,
  withNext = true
}) => {
  const classes = useStyles()
  return (
    <>
      {withPrev && (
        <ButtonBase
          onClick={previous}
          className={cn(
            classes.leftArrow,
            _classes?.leftArrow,
            classes.arrowsBtn,
            _classes?.arrowsBtn
          )}
        >
          <LeftIcon className={cn(classes.arrows, _classes?.arrows)} />
        </ButtonBase>
      )}
      {withNext && (
        <ButtonBase
          onClick={next}
          className={cn(
            classes.rightArrow,
            _classes?.rightArrow,
            classes.arrowsBtn,
            _classes?.arrowsBtn
          )}
        >
          <RightIcon className={cn(classes.arrows, _classes?.arrows)} />
        </ButtonBase>
      )}
    </>
  )
}

export default CarouselButtons
