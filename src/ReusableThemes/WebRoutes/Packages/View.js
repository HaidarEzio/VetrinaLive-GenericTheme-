import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '../../../../src/components/Container'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import CustomLink from '../../../components/CustomLink'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '80px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  header: {
    marginBottom: 80,
    '& > *': { flex: 1 },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 50
    }
  },
  title: theme.title({
    fontSize: 24,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20
    }
  }),
  availability: {
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'right',
    color: theme.palette.colors.neutral[100]
  },
  grid: {
    width: 'calc(100% + 24px)',
    margin: '0 -12px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px'
    }
  },
  gridItem: {
    marginBottom: theme.spacing(5)
  }
}))

const View = ({
  t,
  _classes,
  packages,
  Card,
  shopKey,
  isLinkedCard = false
}) => {
  const classes = useStyles()
  const availability = packages?.length
  // TODO empty page !!!
  return (
    <section className={clsx(classes.root, _classes?.root)}>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={clsx(classes.header, _classes?.header)}
        >
          <div />
          <Typography className={clsx(classes.title, _classes?.title)}>
            {t('promotional_packages')}
          </Typography>
          <Typography
            className={clsx(classes.availability, _classes?.availability)}
          >
            {t('packages_available')}: {availability}
          </Typography>
        </Grid>
        <Grid container className={clsx(classes.grid, _classes?.grid)}>
          {packages.map((p, i) => {
            return isLinkedCard ? (
              <CustomLink
                className={_classes?.link}
                href="/[shopKey]/packages/[packageId]"
                as={`/${shopKey}/packages/${p.id}`}
              >
                <Card key={i} promoPackage={p} width={350} />
              </CustomLink>
            ) : (
              <Card key={i} promoPackage={p} width={350} />
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default View
