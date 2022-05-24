import { Hidden, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Images } from "../../common/props";
import Carousel from "../Carousel/Carousel";
import ProductImage from "../ProductImage/ProductImage";
import useStyles from "./ProductDetailImages.styles";
import ProductImageZoomIn from "../ZoomInImageGallery/ZoomInImageGallery";
import Modal from "../Modal/Modal";

const MAX_IMAGE_WIDTH = 960;

type Props = {
  className?: string;
  images: Images;
};

// Supported grid layouts
const gridLayoutCols = [0, 1, 2, 2, 3, 2, 6, 3, 12];
const gridLayoutTemplates = [
  [""],
  ["i0"],
  ["i0 i0", "i1 ."],
  ["i0 i0", "i1 i2"],
  ["i0 i0 i0", "i1 i2 i3"],
  ["i0 i0", "i1 i2", "i3 i4"],
  ["i0 i0 i0 i0 i0 i0", "i1 i1 i1 i2 i2 i2", "i3 i3 i4 i4 i5 i5"],
  ["i0 i0 i0", "i1 i2 i3", "i4 i5 i6"],
  [
    "i0 i0 i0 i0 i0 i0 i0 i0 i0 i0 i0 i0",
    "i1 i1 i1 i1 i2 i2 i2 i2 i3 i3 i3 i3",
    "i4 i4 i4 i5 i5 i5 i6 i6 i6 i7 i7 i7",
  ],
];

const createTemplateAreas = (length: number) =>
  '"' + gridLayoutTemplates[length].join('" "') + '"';

const ProductDetailImages = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = !useMediaQuery({
    query: `(min-width: ${theme.breakpoints.values.sm}px)`,
  });
  const isLargeDesktop = !useMediaQuery({
    query: `(min-width: ${theme.breakpoints.values.lg}px)`,
  });
  const { md } = theme.breakpoints.values;
  const { images } = props;
  const responsive = {
    mobile: {
      breakpoint: { max: md - 1, min: 0 },
      items: 1,
      partialVisibilityGutter: 24,
    },
  };
  // Remove images if too many for the supported grid layouts
  const gridImages = images.slice(0, gridLayoutCols.length - 1);
  const gridTemplateColumns = `repeat(${
    gridLayoutCols[gridImages.length]
  }, 1fr)`;
  const gridTemplateAreas = createTemplateAreas(gridImages.length);
  const [isOpen, setOpen] = useState(false);
  const [imageGallery, setImageGallery] = useState(images);

  const handleImageClick = (selectedImageIndex: number) => {
    const selectedImage = images[selectedImageIndex];
    // moving selected image to top
    const sortedImages = [
      selectedImage,
      ...images.filter((_, index) => index !== selectedImageIndex),
    ];
    setImageGallery(sortedImages);
    setOpen(true);
  };

  return !images?.length ? null : (
    <>
      <Modal
        open={isOpen}
        setOpen={() => setOpen(false)}
        fullScreen={isMobile}
        fullWidth
        maxWidth={isLargeDesktop ? "lg" : "md"}
        className={classes.zoomInModal}
        isFromImageGallery
      >
        <ProductImageZoomIn images={imageGallery} />
      </Modal>
      <div className={clsx(props.className)}>
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={false}
          ssr={true}
          showDots={true}
          renderDotsOutside={true}
          partialVisible={true}
          infinite={true}
          carouselContainerClass={classes.carousel}
        >
          {images.map((image, i) => (
            <ProductImage
              key={`test_${i}`}
              altText={image.altText}
              imageUrl={image.url}
              badgeSmall
              label={image.label}
              onClick={() => handleImageClick(i)}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductDetailImages;
