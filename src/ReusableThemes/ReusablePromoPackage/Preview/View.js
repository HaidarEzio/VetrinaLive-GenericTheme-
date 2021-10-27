import React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Container from '../../../components/Container'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
    marginBottom: 50
  },
  button: {
    width: 'auto'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    marginRight: 40
  }
}))

const View = ({
  t,
  _classes,
  packages,
  shopKey,
  Card,
  showRedirectButton,
  title,
  customClasses
}) => {
  const classes = useStyles()
  return (
    <section
      className={clsx(classes.root, _classes?.root, customClasses?.root)}
    >
      <Container>
        <Grid container alignItems="center" direction="column">
          {title && (
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className={clsx(classes.title, customClasses?.title)}
              >
                {title}
              </Typography>
            </Grid>
          )}
          <Grid container className={customClasses?.packageContainer}>
            {packages.map((p, i) => (
              <Card key={i} promoPackage={p} width={350} index={i} />
            ))}
          </Grid>
          {showRedirectButton && (
            <CustomButton
              type="link"
              href="/[shopKey]/packages"
              as={`/${shopKey}/packages`}
              label={t('all_promo_packages')}
              className={clsx(classes.button, customClasses?.button)}
              labelClassName={customClasses?.buttonLabel}
            />
          )}
        </Grid>
      </Container>
    </section>
  )
}

export default View
