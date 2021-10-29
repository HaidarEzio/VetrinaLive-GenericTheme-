import { makeStyles } from '@material-ui/core/styles'
import React, { memo } from 'react'
import noPreview from 'public/imgs/nopreview.png'
import ProgressiveImage from 'react-progressive-image'
import cn from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden'
  },
  card: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  },
  loadingEffect: {
    filter: 'blur(0px)',
    '&': {
      '-webkit-filter': 'blur(0px)'
    },
    transition: 'transform 0.5s ease-in-out, filter 0.3s ease-in-out'
  },
  cover: {
    backgroundImage: `url(${noPreview})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'inherit',
    width: '100%'
  },
  imageCover: {
    width: '100%',
    maxHeight: 600,
    objectFit: 'cover'
  },
  loadingCard: {
    filter: 'blur(8px)',
    '&': {
      '-webkit-filter': 'blur(8px)'
    }
  }
}))

function ImageLoader({
  imageSrc,
  imageSrcSmall,
  className,
  classNameImageCover,
  alt,
  type = 'cover'
}) {
  const classes = useStyles()
  const fullImg = imageSrc ? imageSrc : noPreview
  const smallImg = imageSrcSmall ? imageSrcSmall : noPreview

  return (
    <div className={cn(classes.root, className)} title={alt}>
      <ProgressiveImage src={fullImg} placeholder={smallImg} delay={250}>
        {(src, loading) => {
          if (type === 'cover') {
            return (
              <div className={classes.cover}>
                <div
                  style={{
                    backgroundImage: `url(${src})`
                  }}
                  className={cn(classes.card, classes.loadingEffect, {
                    [classes.loadingCard]: loading
                  })}
                />
              </div>
            )
          }
          return (
            <img
              src={src}
              alt={alt}
              className={cn(
                classes.imageCover,
                classNameImageCover,
                classes.loadingEffect,
                {
                  [classes.loadingCard]: loading
                }
              )}
            />
          )
        }}
      </ProgressiveImage>
    </div>
  )
}

export default memo(ImageLoader)
