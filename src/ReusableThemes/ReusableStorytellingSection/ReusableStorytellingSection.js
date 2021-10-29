import React, { useCallback } from "react";
import clsx from "clsx";
import ReactPlayer from "react-player/lazy";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "Components/Container";
import useIsMobile from "hooks/useIsMobile";
import CustomTextEditor from "Components/CustomTextEditor";
import { isRichText } from "Utils/utils";

const useStyles = makeStyles((theme) => ({
  img: {
    height: 550,
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  title: {
    fontSize: 34,
    lineHeight: "39px",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
    fontWeight: 600,
  },
  textDefault: {
    order: 1,
  },
  container: {
    display: "grid",
    alignItems: "center",
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
  description: {
    color: theme.palette.colors.black[900],
    fontSize: 15,
    lineHeight: "24px",
    wordBreak: "break-word",
  },
  containerFlex: {
    display: "flex",
  },
  imgLayout1: {
    order: 0,
    width: "50%",
  },
  textLayout1: {
    order: 1,
    paddingLeft: theme.spacing(4),
    width: "50%",
  },
  imgLayout2: {
    order: 1,
    width: "50%",
  },
  textLayout2: {
    order: 0,
    paddingRight: theme.spacing(4),
    width: "50%",
  },
  imgLayout3: {
    order: 0,
    width: "100%",
  },
  textLayout3: {
    order: 1,
    paddingTop: theme.spacing(4),
  },
  imgLayout4: {
    order: 1,
    width: "100%",
  },
  textLayout4: {
    order: 0,
    paddingBottom: theme.spacing(4),
  },
  imgMobile: {
    height: 344,
    width: "100%",
  },
}));

const ReusableStorytellingSection = ({ storytelling, customClasses }) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const {
    id: storytellingId,
    layout: storytellingLayout,
    description,
    title,
    picture,
    video,
  } = storytelling;

  const showFlexContainer =
    (!storytellingLayout ||
      storytellingLayout === 1 ||
      storytellingLayout === 2) &&
    !isMobile;
  const layout1Mobile =
    (storytellingLayout === 1 || storytellingLayout === 3) && isMobile;
  const layout2Mobile =
    (storytellingLayout === 2 || storytellingLayout === 4) && isMobile;

  const renderTextEditor = useCallback((defaultValue) => {
    if (!isRichText(defaultValue)) {
      return <div>{defaultValue}</div>;
    }
    return (
      <CustomTextEditor
        inlineToolbar={false}
        toolbar={false}
        readOnly={true}
        defaultValue={defaultValue}
      />
    );
  }, []);

  return (
    <Container
      className={clsx(classes.container, customClasses?.container, {
        [classes.containerFlex]: showFlexContainer,
      })}
    >
      {picture ? (
        <img
          className={clsx(classes.img, customClasses?.img, {
            [classes.imgLayout1]:
              (!storytellingLayout || storytellingLayout === 1) && !isMobile,
            [classes.imgLayout2]: storytellingLayout === 2 && !isMobile,
            [classes.imgLayout3]: storytellingLayout === 3 || layout1Mobile,
            [classes.imgLayout4]: storytellingLayout === 4 || layout2Mobile,
            [classes.imgMobile]: isMobile,
          })}
          alt={`${storytellingId}-${picture}`}
          src={picture}
        />
      ) : null}
      {video ? (
        <div
          className={clsx(classes.img, customClasses?.img, {
            [classes.imgLayout1]:
              (!storytellingLayout || storytellingLayout === 1) && !isMobile,
            [classes.imgLayout2]: storytellingLayout === 2 && !isMobile,
            [classes.imgLayout3]: storytellingLayout === 3 || layout1Mobile,
            [classes.imgLayout4]: storytellingLayout === 4 || layout2Mobile,
            [classes.imgMobile]: isMobile,
          })}
        >
          <ReactPlayer width="100%" height="100%" controls url={video.url} />
        </div>
      ) : null}
      <div
        className={clsx(classes.textDefault, customClasses?.textDefault, {
          [classes.textLayout1]:
            (!storytellingLayout || storytellingLayout === 1) && !isMobile,
          [classes.textLayout2]: storytellingLayout === 2 && !isMobile,
          [classes.textLayout3]: storytellingLayout === 3 || layout1Mobile,
          [classes.textLayout4]: storytellingLayout === 4 || layout2Mobile,
        })}
      >
        <Typography
          component="div"
          className={clsx(classes.title, customClasses?.title)}
        >
          {title}
        </Typography>
        <Typography
          className={clsx(classes.description, customClasses?.description)}
        >
          {renderTextEditor(description)}
        </Typography>
      </div>
    </Container>
  );
};

export default ReusableStorytellingSection;
