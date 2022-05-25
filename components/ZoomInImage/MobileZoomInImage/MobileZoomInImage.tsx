import React, { useRef } from "react";
// import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
  const maxWidth = 480;
  const imageWidths = [240, 384, 480, 960];
  const processedUrl = processImageUrl(
    image.url,
    { w: maxWidth, img404: "not-available" },
    ["$poi-square$"]
  );

  // Get all the image sizes less than the max height except 1
  const filteredImageWidths = filterImageWidths(imageWidths, maxWidth);

  return (
    <div className={classes.container}>
      <div className={classes.mobileImageContainer}>
        <TransformWrapper centerOnInit centerZoomedOut minScale={1.25}>
          <TransformComponent contentClass={classes.transformContentClass}>
            <Image
              imageUrl={processedUrl}
              imageWidths={
                filteredImageWidths.length > 1 ? filteredImageWidths : undefined
              }
              altText={image.altText || ""}
              className={clsx(classes.image)}
              width={maxWidth}
              height={maxWidth}
              draggable
            />
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
