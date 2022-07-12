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
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.mobileImageContainer}>
        <TransformWrapper centerOnInit centerZoomedOut minScale={1.15}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <TransformComponent
              contentClass={classes.transformContentClass}
              wrapperClass={classes.wrapperClass}
            >
              <img src={image.url} alt={image.altText} />
            </TransformComponent>
          )}
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
