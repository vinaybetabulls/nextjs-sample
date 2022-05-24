import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { Image as ImageProps } from "../../../common/props";
import useStyles from "./MobileZoomInImage.styles";

type Props = {
  image: ImageProps;
};

const MobileZoomInImage = ({ image }: Props) => {
  console.log("mobile.... image...");
  const classes = useStyles();
  const imgRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const onUpdate = useCallback(
    ({ x, y, scale }) => {
      const { current: img } = imgRef;
      const { current: div } = imageContainerRef;
      const imgBounds = img?.getBoundingClientRect();
      if (img) {
        const value = make3dTransformValue({ x, y, scale });
        img?.style?.setProperty("transform", value);
        img?.style?.setProperty("minHeight", "335px");
        img?.style?.setProperty("minWidth", "335px");
      }
    },
    [imgRef, imageContainerRef]
  );

  return (
    <div className={classes.container}>
      {/* documentation link https://github.com/retyui/react-quick-pinch-zoom/blob/master/docs/api/README.md  */}
      <QuickPinchZoom
        onUpdate={onUpdate}
        containerProps={{ className: classes.mobileImageContainer }}
      >
        <img src={image.url} alt={image.altText} ref={imgRef} />
      </QuickPinchZoom>
      {!!image.label && (
        <div className={classes.productName}>
          <p>{image.label}</p>
        </div>
      )}
    </div>
  );
};

export default MobileZoomInImage;
