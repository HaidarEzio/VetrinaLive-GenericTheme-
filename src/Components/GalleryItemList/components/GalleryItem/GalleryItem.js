import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  buttonImage: {
    width: 'inherit',
    height: 'inherit'
  },
  imageWrapper: ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'inherit',
    maxHeight: '100%',
    display: 'flex',
    zIndex: 2
  })
}))

const GalleryItem = ({ image, toggleDialog, className }) => {
  const size = image['1000x1200']
  const classes = useStyles({ image: size })
  return (
    <ButtonBase
      onClick={() => toggleDialog(image)}
      className={cn(classes.buttonImage, className)}
    >
      <Grid className={classes.imageWrapper} />
    </ButtonBase>
  )
}

export default GalleryItem
