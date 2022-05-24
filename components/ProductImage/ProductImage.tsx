import clsx from "clsx";
import React, { CSSProperties } from "react";
import { ImageSize } from "../../common/props";
import { processImageUrl } from "../../utils/image";
import Image from "../Image/Image";
import useStyles from "./ProductImage.styles";

export type Props = {
  imageUrl?: string;
  altText?: string;
  label?: string;
  badgeSmall?: boolean;
  classNames?: {
    container?: string;
    imageContainer?: string;
    badge?: string;
    image?: string;
    label?: string;
  };
  style?: CSSProperties;
  maxWidth?: number;
  sizes?: ImageSize[];
  imageWidths?: number[];
  isFromProductCard?: boolean;
  onClick?: () => void;
};

const IMAGE_PRODUCT_PLACEHOLDER =
  "https://cdn.media.amplience.net/i/interflora/not-available";

export function filterImageWidths(imageWidths: number[], maxWidth: number) {
  const index = imageWidths.findIndex((width) => width >= maxWidth);
  const filteredImageWidths =
    index !== -1 ? imageWidths.slice(0, 1 + index) : [...imageWidths, maxWidth];
  return filteredImageWidths;
}

const ProductImage = (props: Props) => {
  const classes = useStyles();
  const {
    imageUrl,
    altText,
    label,
    badgeSmall,
    classNames,
    style,
    maxWidth = 480,
    sizes,
    imageWidths = [240, 384, 480, 960, 1280, 1600],
    isFromProductCard,
    onClick,
  } = props;

  const processedUrl = processImageUrl(
    imageUrl || IMAGE_PRODUCT_PLACEHOLDER,
    { w: maxWidth, img404: "not-available" },
    ["$poi-square$"]
  );

  // Get all the image sizes less than the max height except 1
  const filteredImageWidths = filterImageWidths(imageWidths, maxWidth);

  return (
    <div
      className={clsx(classNames?.container, classes.container)}
      style={style}
    >
      <div className={clsx(classNames?.imageContainer, classes.imageContainer)}>
        <Image
          imageUrl={processedUrl}
          sizes={sizes}
          // only include image widths if there is more than 1
          imageWidths={
            filteredImageWidths.length > 1 ? filteredImageWidths : undefined
          }
          altText={altText || ""}
          className={clsx(classNames?.image, classes.image)}
          draggable={false}
          width={maxWidth}
          height={maxWidth}
          onClick={onClick}
        />
      </div>

      {label && (
        <div className={clsx(classNames?.label, classes.label)}>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
