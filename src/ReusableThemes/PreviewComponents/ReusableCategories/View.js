import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  rows: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  button: () => ({
    padding: '0 10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  }),
  text: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.colors.black[0],
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}))

const View = ({
  t,
  showBtn,
  onClick,
  showAllCategories,
  categories = [],
  limit = 4,
  _classes
}) => {
  const classes = useStyles()
  const isFiveCategories = categories.length === 5
  const currLimit = isFiveCategories ? 5 : limit
  const filteredCategories = categories?.slice(0, currLimit)
  return (
    <Grid container className={clsx(classes.rows, _classes?.rows)}>
      {filteredCategories.slice(0, currLimit).map(({ title, id }, i) => (
        <ButtonBase
          key={i}
          onClick={() => onClick(id)}
          className={clsx(classes.button, _classes?.button)}
        >
          <Typography className={clsx(classes.text, _classes?.text)}>
            {title}
          </Typography>
        </ButtonBase>
      ))}
      {showBtn && !isFiveCategories && (
        <ButtonBase
          onClick={showAllCategories}
          className={clsx(classes.button, _classes?.button)}
        >
          <Typography
            className={clsx(
              classes.text,
              _classes?.text,
              _classes?.allCategories
            )}
          >
            {t('all_categories')}
          </Typography>
        </ButtonBase>
      )}
    </Grid>
  )
}

export default View
