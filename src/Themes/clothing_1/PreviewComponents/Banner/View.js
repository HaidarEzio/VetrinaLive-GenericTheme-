import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '../../../../src/components/Container/Container'
import { Grid, Typography } from '@material-ui/core'
import CustomLink from '../../../../src/components/CustomLink'
import CustomButton from '../../../../src/components/CustomButton/CustomButton'
import banner from '/public/imgs/clothing_1_banner.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0
    }
  },
  title: theme.title({
    fontSize: 24,
    lineHeight: '32px',
    color: theme.palette.colors.black[0],
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  }),
  description: theme.title({
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    color: theme.palette.colors.black[0]
  }),
  btn: {
    width: 'auto'
  },
  cover: ({ banner }) => ({
    height: 575,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${banner})`,
    [theme.breakpoints.down('sm')]: {
      height: 300
    }
  }),
  details: {
    height: '100%',
    marginLeft: 20,
    display: 'flex',
    padding: '70px 0',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: theme.palette.colors.beige,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 20
    }
  }
}))

const View = ({ shopKey, maxDiscount, t }) => {
  const classes = useStyles({ banner })
  const theme = useTheme()

  return (
    <section className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={7}>
            <div className={classes.cover} />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <div className={classes.details}>
              {maxDiscount ? (
                <Typography className={classes.description}>
                  {t('save_up', { percent: maxDiscount })}
                </Typography>
              ) : null}
              <Typography noWrap className={classes.title}>
                {t('discover_collections')}
              </Typography>
              <CustomLink
                href="/[shopKey]/products"
                as={`/${shopKey}/products`}
              >
                <CustomButton
                  className={classes.btn}
                  backgroundColor={theme.palette.secondary.main}
                  label={t('shop_now')}
                />
              </CustomLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default View
