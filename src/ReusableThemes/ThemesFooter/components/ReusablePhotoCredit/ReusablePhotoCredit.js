import React from 'react'
import { Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  copyrightText: {
    paddingBottom: 17,
    fontWeight: 400,
    color: theme.palette.colors.black[0],
    fontSize: 14,
    lineHeight: '20px'
  },
  copyrightLink: {
    fontWeight: 700,
    textDecoration: 'underline !important',
    color: theme.palette.colors.black[0],
    fontSize: 16,
    lineHeight: '20px',
    margin: '0px 5px'
  }
}))

const ReusablePhotoCredit = ({
  t,
  _classes,
  bannerAuthorLink,
  bannerAuthor
}) => {
  const classes = useStyles()
  return (
    <Typography
      component="div"
      className={clsx(classes.copyrightText, _classes?.copyrightText)}
      align="center"
    >
      {t('cover_image_by')}
      <Link
        className={clsx(classes.copyrightLink, _classes?.copyrightLink)}
        href={`${bannerAuthorLink}?utm_source=vetrinalive&utm_medium=referral`}
      >
        {bannerAuthor}
      </Link>
      {t('on')}
      <Link
        className={clsx(classes.copyrightLink, _classes?.copyrightLink)}
        href="https://unsplash.com/?utm_source=vetrinalive&utm_medium=referral"
      >
        Unsplash
      </Link>
    </Typography>
  )
}

export default ReusablePhotoCredit
