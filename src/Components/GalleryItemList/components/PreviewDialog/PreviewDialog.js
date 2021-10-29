import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CloseButton from './components/CloseButton'
import noPreview from 'public/imgs/nopreview.png'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'block',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  previewContentContainer: {
    height: '100%'
  },
  image: {
    maxWidth: '100%',
    display: 'flex'
  },
  previewImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%'
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxHeight: '100%',
    display: 'flex',
    zIndex: 2
  },
  paper: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  icon: {
    color: theme.palette.colors.white,
    fontSize: 40,
    [theme.breakpoints.down('xs')]: {
      fontSize: 30
    },
    position: 'fixed',
    top: 24,
    right: 24
  }
}))

const PreviewDialog = (props) => {
  const classes = useStyles()
  const { onClose, open, image } = props
  const [size, setSize] = useState(noPreview)
  const [id, setId] = useState(null)

  useEffect(() => {
    if (image) {
      setSize(image['1000x1200'])
      setId(image.id)
    }
  }, [image])

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={classes.container}
      classes={{ paper: classes.paper }}
    >
      <Grid
        container
        justify="flex-end"
        alignItems="center"
        className={classes.previewContentContainer}
      >
        <Grid item>
          <CloseButton className={classes.icon} onClose={onClose} />
        </Grid>
        <Grid className={classes.previewImageContainer}>
          <Grid className={classes.imageWrapper}>
            <img src={size} alt={id} className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default PreviewDialog
