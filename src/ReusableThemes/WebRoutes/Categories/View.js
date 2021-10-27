import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ButtonBase, Grid, Typography } from '@material-ui/core'
import Container from '../../../../src/components/Container'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '80px 0'
  },
  header: {
    marginBottom: 80,
    '& > *': { flex: 1 },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50
    }
  },
  title: theme.title({
    textAlign: 'center',
    color: theme.palette.colors.neutral[90],
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20
    }
  }),
  grid: {
    width: `calc(100% + ${theme.spacing(4)}px)`,
    margin: `0 -${theme.spacing(2)}px`,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0
    }
  },
  card: {
    padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  button: {
    padding: '0 10px',
    width: '100%'
  },
  text: theme.title({
    color: theme.palette.colors.white,
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
}))

const View = ({ t, onClick, categories, _classes }) => {
  const classes = useStyles()
  return (
    <section className={cn(classes.root, _classes?.root)}>
      <Container>
        <Grid
          container
          justify="center"
          className={cn(classes.header, _classes?.header)}
        >
          <Typography className={cn(classes.title, _classes?.title)}>
            {t('category')}
          </Typography>
        </Grid>

        <Grid container className={cn(classes.grid, _classes?.grid)}>
          {categories.map(({ title, id }, i) => (
            <Grid
              item
              xs={6}
              sm={4}
              lg={3}
              className={cn(classes.card, _classes?.card)}
            >
              <ButtonBase
                key={i}
                onClick={() => onClick(id)}
                className={cn(classes.button, _classes?.button)}
              >
                <Typography className={cn(classes.text, _classes?.text)}>
                  {title}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default View
