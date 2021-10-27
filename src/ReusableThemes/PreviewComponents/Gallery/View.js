import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Container from '../../../../src/components/Container/Container'
import CustomButton from '../../../../src/components/CustomButton/CustomButton'
import { isEmpty } from 'lodash'
import GalleryItem from '../../../../src/components/GalleryItemList/components/GalleryItem'
import PreviewDialog from '../../../../src/components/GalleryItemList/components/PreviewDialog'
import cn from 'clsx'
import { Fragment } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0'
    }
  },
  title: theme.title({
    marginBottom: 40,
    textAlign: 'center'
  }),
  cardsRoot: {
    margin: '0 -12px 40px',
    width: 'calc( 100% + 24px )',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 40px',
      width: '100%'
    }
  },
  card: {
    zIndex: 3,
    padding: '0 12px',
    overflow: 'hidden',
    width: '100%'
  },
  media: {
    overflow: 'hidden',
    padding: '5px 0px'
  },
  button: {
    height: 48
  }
}))

const View = ({
  t,
  shopKey,
  open,
  selected,
  showButton,
  toggleDialog,
  filteredItems,
  withoutContainer = false,
  _classes
}) => {
  const classes = useStyles()

  const Wrapper = useMemo(() => (withoutContainer ? Fragment : Container), [
    withoutContainer
  ])
  return (
    <section className={cn(classes.root, _classes?.root)}>
      <Wrapper>
        <Typography className={cn(classes.title, _classes?.title)}>
          {t('gallery')}
        </Typography>
        <Grid
          container
          justify="center"
          className={cn(classes.cardsRoot, _classes?.cardsRoot)}
        >
          {!isEmpty(filteredItems) &&
            filteredItems?.map((img, i) => (
              <Grid
                item
                xs={12}
                md={4}
                key={i}
                className={cn(classes.card, _classes?.card)}
              >
                <GalleryItem
                  image={img}
                  toggleDialog={toggleDialog}
                  className={_classes?.media}
                />
              </Grid>
            ))}
          <PreviewDialog open={open} onClose={toggleDialog} image={selected} />
        </Grid>
        {showButton && (
          <Grid container justify="center">
            <CustomButton
              type="link"
              href="/[shopKey]/gallery"
              as={`/${shopKey}/gallery`}
              label={t('view_gallery')}
              className={cn(classes.button, _classes?.button)}
              labelClassName={_classes?.buttonLabel}
            />
          </Grid>
        )}
      </Wrapper>
    </section>
  )
}

export default View
