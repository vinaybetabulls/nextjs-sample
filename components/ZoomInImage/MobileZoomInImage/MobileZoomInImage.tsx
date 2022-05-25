import React, { useRef } from "react";
// import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Image as ImageProps } from "../../../common/props";
import useStyles from "./MobileZoomInImage.styles";

type Props = {
  image: ImageProps;
};

const MobileZoomInImage = ({ image }: Props) => {
  const classes = useStyles();
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div className={classes.container}>
      <div className={classes.mobileImageContainer}>
        {/* documentation link https://github.com/retyui/react-quick-pinch-zoom/blob/master/docs/api/README.md  */}
        <TransformWrapper centerOnInit centerZoomedOut minScale={1.25}>
          <TransformComponent contentClass={classes.transformContentClass}>
            <img src={image.url} alt={image.altText} ref={imgRef} />
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
