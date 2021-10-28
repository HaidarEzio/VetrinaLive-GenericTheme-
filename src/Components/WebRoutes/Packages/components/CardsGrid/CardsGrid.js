import React, { useCallback, useMemo } from "react";
import clsx from "clsx";
import useDimensions from "react-use-dimensions";
import { FixedSizeGrid } from "react-window";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import FullScreenLoader from "Components/FullScreenLoader";
import SingleCard from "../SingleCard";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingRight: theme.spacing(5),
  },
  lastCell: {
    paddingRight: 0,
  },
}));

function CardsGrid(props) {
  const { promoPackages = [], t, shopKey, loading } = props;
  const classes = useStyles();
  const [ref, { width = 0 }] = useDimensions();

  const theme = useTheme();
  const breakpointsDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const breakpointsDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const rowHeight = 599 + 40;

  const columnCount = useMemo(() => {
    if (breakpointsDownMd) return 1;
    if (breakpointsDownLg) return 2;
    return 3;
  }, [breakpointsDownLg, breakpointsDownMd]);

  const renderItem = useCallback(
    ({ promoPackage, style, isLastCell }) => {
      return (
        <div
          style={style}
          className={clsx(classes.card, {
            [classes.lastCell]: isLastCell,
          })}
        >
          <SingleCard
            width={style.width}
            t={t}
            promoPackage={promoPackage}
            shopKey={shopKey}
          />
        </div>
      );
    },
    [classes.card, classes.lastCell, shopKey, t]
  );

  const Cell = useCallback(
    ({ columnIndex, rowIndex, style }) => {
      const index = columnIndex + rowIndex * columnCount;
      const isLastCell = columnIndex + 1 === columnCount;

      if (index >= promoPackages.length) return null;

      const promoPackage = promoPackages[index];
      return renderItem({ style, promoPackage, isLastCell });
    },
    [columnCount, promoPackages, renderItem]
  );

  const renderGrid = useMemo(() => {
    const columnWidth = width / columnCount - columnCount;
    const rowCount = Math.ceil(promoPackages.length / columnCount);

    return (
      <FixedSizeGrid
        width={width}
        height={rowHeight * rowCount}
        columnCount={columnCount}
        columnWidth={columnWidth}
        rowCount={rowCount}
        rowHeight={rowHeight}
      >
        {Cell}
      </FixedSizeGrid>
    );
  }, [Cell, columnCount, promoPackages.length, rowHeight, width]);

  if (loading) {
    return (
      <div>
        <FullScreenLoader />
      </div>
    );
  }

  return <div ref={ref}>{renderGrid}</div>;
}

export default CardsGrid;
