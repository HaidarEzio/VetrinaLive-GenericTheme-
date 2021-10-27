import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Button, Typography } from '@material-ui/core'
import { ArrowDropDownRounded } from '@material-ui/icons'
import CustomDropdown from '../../../src/components/CustomDropdown'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 80,
    '& > *': { flex: 1 },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      padding: '0 15px',
      flexWrap: 'wrap',
      '& > *': { flex: 'initial' }
    }
  },
  categories: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      order: 2,
      marginTop: 20
    }
  },
  button: {
    textTransform: 'none',
    '& svg': {
      color: theme.palette.colors.neutral[5],
      fontSize: 30
    }
  },
  title: theme.title({
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20
    }
  }),
  text: {
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'right',
    color: theme.palette.colors.neutral[100]
  }
}))

const View = ({
  t,
  toggleDropdown,
  filterCategories,
  getOptions,
  anchorEl,
  total,
  searchResult,
  _classes
}) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={cn(classes.header, _classes?.header)}
    >
      <Grid item className={cn(classes.categories, _classes?.categories)}>
        <Button onClick={toggleDropdown} className={classes.button}>
          <Typography className={cn(classes.text, _classes?.text)}>
            {filterCategories.selectedCategory?.title || t('all_categories')}
          </Typography>
          <ArrowDropDownRounded />
        </Button>
        <CustomDropdown
          items={getOptions}
          anchorEl={anchorEl}
          handleClose={toggleDropdown}
          onChange={(i) => filterCategories.onClick(i.value)}
          minWidth={150}
          maxHeight={225}
        />
      </Grid>
      <Typography className={cn(classes.title, _classes?.title)}>
        {searchResult ? (
          <React.Fragment>
            {t('search_result')} <span>"{searchResult}"</span>
          </React.Fragment>
        ) : (
          t('products')
        )}
      </Typography>
      <Typography className={cn(classes.text, _classes?.text)}>
        {t('products_available')}: {total}
      </Typography>
    </Grid>
  )
}

export default memo(View)
