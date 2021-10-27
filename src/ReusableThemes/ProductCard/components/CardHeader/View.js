import Grid from '@material-ui/core/Grid'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ImageLoader from '../../../../../src/components/ImageLoader'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  media: ({ isFeaturedProduct }) => ({
    position: 'relative',
    minHeight: 325,
    minWidth: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      minHeight: isFeaturedProduct ? 325 : 225
    }
  }),
  lazyLoadingRoot: {
    height: '100%',
    minWidth: '100%',
    position: 'absolute',
    top: 0
  },
  category: {
    position: 'relative',
    zIndex: 3,
    width: 'fit-content',
    color: theme.palette.colors.white,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 11,
    fontWeight: 400,
    lineHeight: '13px',
    padding: 5,
    margin: 8,
    wordBreak: 'break-word'
  },
  discountRoot: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 60,
    height: 24,
    background: theme.palette.colors.states.success
  },
  discountText: {
    position: 'relative',
    zIndex: 2,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '20px',
    color: theme.palette.colors.white
  },
  discountBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
}))

function View({
  category,
  name,
  image_thumbnail_url,
  image_url,
  discountProcent,
  className,
  isFeaturedProduct,
  showCategoryLabel,
  _classes
}) {
  const classes = useStyles({ isFeaturedProduct })

  return (
    <div
      className={clsx(classes.media, className, _classes?.card)}
      title={name}
    >
      <ImageLoader
        imageSrc={image_url}
        imageSrcSmall={image_thumbnail_url}
        className={clsx(classes.lazyLoadingRoot, _classes?.img)}
        alt={name}
      />

      {discountProcent > 0 && (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={clsx(classes.discountRoot, _classes?.discountRoot)}
        >
          <Typography
            className={clsx(classes.discountText, _classes?.discountText)}
          >
            {`-${discountProcent}`}%
          </Typography>
        </Grid>
      )}

      {category && showCategoryLabel ? (
        <Typography
          align="center"
          className={clsx(classes.category)}
          variant="subtitle1"
          style={{ backgroundColor: category.color }}
        >
          {category.title}
        </Typography>
      ) : null}
    </div>
  )
}

export default React.memo(View)
