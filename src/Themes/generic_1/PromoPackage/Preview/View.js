import React from 'react'
import PromoPackagesPreview from 'ReusableThemes/ReusablePromoPackage/Preview'
import makeStyles from '@material-ui/styles/makeStyles/makeStyles'

const useStyles = makeStyles((theme) => ({
  packageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  }
}))

const View = (props) => {
  const classes = useStyles()

  return (
    <PromoPackagesPreview
      customClasses={{
        packageContainer: classes.packageContainer
      }}
      showRedirectButton
      {...props}
    />
  )
}

export default View
