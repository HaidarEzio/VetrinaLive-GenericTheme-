import React, { useCallback } from "react";
import clsx from "clsx";
import Container from "Components/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { generateUrl } from "Utils/utils";
import ReusablePhotoCredit from "./components/ReusablePhotoCredit";

const useStyles = makeStyles((theme) => ({
  root: ({ background = theme.palette.colors.neutral[90] }) => ({
    background,
  }),
  powered: ({ color }) => ({
    padding: 16,
    textAlign: "center",
    borderTop: `1px solid ${color || theme.palette.colors.white}`,
  }),
  menu: {
    padding: "55px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "70px 16px 40px",
    },
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  list: {
    padding: 0,
    margin: 0,
    paddingRight: 100,
    listStyle: "none",
    "&:last-of-type": {
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
      paddingRight: 50,
    },
  },
  contacts: {
    padding: 0,
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
  label: ({ color }) => ({
    fontSize: 14,
    lineHeight: "20px",
    color: color || theme.palette.colors.neutral[10],
  }),
  title: ({ color }) => ({
    fontWeight: 700,
    color: color || theme.palette.colors.white,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  }),
  button: {
    textTransform: "none",
    padding: 0,
    textAlign: "left",
    display: "block",
    "& span": {
      display: "block",
    },
  },
  payWith: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& $listItem": {
        display: "inline-block",
        marginRight: 8,
      },
    },
  },
  payWithItemTitle: {
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
}));

const ThemesFooter = ({
  t,
  contacts,
  menu,
  socials,
  pay_with,
  goTo,
  background,
  color,
  bannerAuthor,
  bannerAuthorLink,
  _classes,
}) => {
  const classes = useStyles({ background, color });
  const SHOW_IMAGES_COPYRIGHT = bannerAuthor && bannerAuthorLink;
  const formattedSocials = socials.map((social) => {
    if (social.label === "Whatsapp" || social.label === "Social") {
      return { ...social };
    }
    const url = generateUrl({
      format: social.label.toLowerCase(),
      link: social.href,
    });

    return {
      label: social.label,
      href: url,
    };
  });

  const renderItem = useCallback(
    ({ label, isTitle, href, to, onClick }) => {
      const root = (
        <Typography
          noWrap
          className={clsx(classes.label, _classes?.label, {
            [classes.title]: isTitle,
            [_classes?.title]: isTitle,
          })}
        >
          {label}
        </Typography>
      );

      if (href) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {root}
          </a>
        );
      }

      if (to) {
        return (
          <Button
            className={classes.button}
            onClick={() => {
              if (to) goTo(to);
              if (onClick) onClick();
            }}
          >
            {root}
          </Button>
        );
      }

      return root;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [classes.button, classes.label, classes.title, goTo]
  );
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container className={classes.menu}>
          <Grid item xs={12} md={5} lg={6}>
            <ul className={clsx(classes.list, classes.contacts)}>
              {contacts.map((item, i) => (
                <li key={i} className={classes.listItem}>
                  {renderItem(item)}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <div className={classes.navigation}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Typography className={clsx(classes.label, classes.title)}>
                    {t("menu")}
                  </Typography>
                </li>
                {menu.map((item, i) => (
                  <li key={i} className={classes.listItem}>
                    {renderItem(item)}
                  </li>
                ))}
              </ul>
              <ul className={classes.list}>
                {formattedSocials.map((item, i) => (
                  <li key={i} className={classes.listItem}>
                    {renderItem(item)}
                  </li>
                ))}
              </ul>
              <ul className={clsx(classes.list, classes.payWith)}>
                <li
                  className={clsx(classes.listItem, classes.payWithItemTitle)}
                >
                  <Typography
                    noWrap
                    className={clsx(
                      classes.label,
                      classes.title,
                      _classes?.title
                    )}
                  >
                    {t("pay_with")}
                  </Typography>
                </li>
                {pay_with.map(({ img, label }, i) => (
                  <li key={i} className={classes.listItem}>
                    <img src={img} alt={label} />
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
        {SHOW_IMAGES_COPYRIGHT && (
          <ReusablePhotoCredit
            t={t}
            _classes={_classes}
            bannerAuthor={bannerAuthor}
            bannerAuthorLink={bannerAuthorLink}
          />
        )}
      </Container>
      <div className={classes.powered}>
        <Typography noWrap className={clsx(classes.label, _classes?.label)}>
          {t("powered_by")} Vetrina Live
        </Typography>
      </div>
    </footer>
  );
};

export default ThemesFooter;
