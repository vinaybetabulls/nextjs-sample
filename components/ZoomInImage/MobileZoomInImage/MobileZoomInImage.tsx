import React, { useEffect, useRef, useState } from "react";
// import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { Image as ImageProps } from "../../../common/props";
import useStyles from "./MobileZoomInImage.styles";
import Image from "../../Image/Image";
import { processImageUrl } from "../../../utils/image";
import { useTheme } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import clsx from "clsx";
import { filterImageWidths } from "../../ProductImage/ProductImage";
type Props = {
  image: ImageProps;
};

const squareImage = true;

const MobileZoomInImage = ({ image }: Props) => {
  const classes = useStyles();
  const imgRef = useRef<HTMLImageElement>(null);
  const theme = useTheme();
  const imageUrl =
    image?.url &&
    processImageUrl(
      image.url,
      {
        w: theme.breakpoints.values.xl / 2,
        aspect: squareImage ? "1:1" : "2:1",
      },
      ["$poi-square$"]
    );

  const breakpoints: {
    breakpoint: Breakpoint;
    query: "min-width" | "max-width";
    w: number;
    aspect: string;
  }[] = [
    {
      breakpoint: "xs",
      query: "max-width",
      w: theme.breakpoints.values.xs,
      aspect: "1:1",
    },
    {
      breakpoint: "sm",
      query: "max-width",
      w: theme.breakpoints.values.sm,
      aspect: squareImage ? "1:1" : "2:1",
    },
    {
      breakpoint: "md",
      query: "max-width",
      w: theme.breakpoints.values.md / 2,
      aspect: squareImage ? "1:1" : "1:1",
    },
    {
      breakpoint: "lg",
      query: "max-width",
      w: theme.breakpoints.values.lg / 2,
      aspect: squareImage ? "1:1" : "1:1",
    },
  ];
  const images = image?.url
    ? breakpoints.map(({ breakpoint, query, w, aspect }) => ({
        breakpoint,
        query,
        filename: processImageUrl(image.url, { w, aspect }, ["$poi-square$"]),
      }))
    : undefined;

  const [minX, setMinX] = useState(335);
  const [minY, setMinY] = useState(336);
  const matchesMediaQuery = window.matchMedia(
    "(max-width:999px) and (orientation:landscape)"
  ).matches;
  const updateCurrentState = (event) => {
    console.log("updateCurrentState", { matchesMediaQuery });
    if (matchesMediaQuery) {
      setMinX(335);
      setMinY(336);
    } else {
      setMinX(625);
      setMinY(275);
    }
  };
  useEffect(() => {
    window.addEventListener("orientationchange", updateCurrentState);
    return () => {
      window?.removeEventListener("orientationchange", updateCurrentState);
    };
  });
  return (
    <div className={classes.container}>
      <div className={classes.mobileImageContainer}>
        <TransformWrapper
          centerOnInit
          centerZoomedOut
          minScale={1.2}
          minPositionY={minY}
          minPositionX={minX}
        >
          <TransformComponent
            contentClass={classes.transformContentClass}
            wrapperClass={classes.wrapperClass}
          >
            <img src={image.url} alt={image.altText} />
          </TransformComponent>
        </TransformWrapper>
      </div>
      {!!image.label && (
        <div className={classes.productName}>
          <p>{image.label}</p>
        </div>
      )}
    </div>
  );
};

export default MobileZoomInImage;
