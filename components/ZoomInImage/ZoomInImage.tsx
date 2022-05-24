import React from "react";
import MobileZoomInImage from "./MobileZoomInImage/MobileZoomInImage";
import DesktopZoomInImage from "./DesktopZoomInImage/DesktopZoomInImage";

import { Image } from "../../common/props";

export type Props = {
  image: Image;
  isMobile?: boolean;
};

const ZoomInImage = ({ image, isMobile }: Props) => {
  return (
    <>
      {isMobile ? (
        <MobileZoomInImage image={image} />
      ) : (
        <DesktopZoomInImage image={image} />
      )}
    </>
  );
};
export default ZoomInImage;
