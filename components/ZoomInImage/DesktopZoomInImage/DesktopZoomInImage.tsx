import React, { useState } from "react";
import useStyles from "./../ZoomInImage.styles";
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { Image } from "../../../common/props";
import { processImageUrl } from "../../../utils/image";

type Props = {
  image: Image;
};

const DesktopZoomInImage = ({ image }: Props) => {
  const classes = useStyles();
  const [isZoomIn, setZoomIn] = useState(false);
  const imageURL = processImageUrl(image.url);

  return (
    <div className={classes.perimeter} onClick={() => setZoomIn(!isZoomIn)}>
      <div className={classes.image}>
        <Magnifier
          imageSrc={image.url}
          imageAlt={image.altText}
          mouseActivation={MOUSE_ACTIVATION.CLICK}
          touchActivation={TOUCH_ACTIVATION.TAP}
          dragToMove={false}
          className={isZoomIn ? classes.zoomOut : classes.zoomIn}
        />
      </div>
      {!!image.label && (
        <div className={classes.productName}>
          <p>{image.label}</p>
        </div>
      )}
    </div>
  );
};

export default DesktopZoomInImage;
