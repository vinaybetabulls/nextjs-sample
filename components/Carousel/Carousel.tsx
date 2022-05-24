import clsx from "clsx";
import React from "react";
import ImportedCarousel, { CarouselProps } from "react-multi-carousel";
import useStyles from "./Carousel.styles";

const Carousel = React.forwardRef<
  ImportedCarousel,
  CarouselProps & { carouselContainerClass?: string }
>((props, ref) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.carousel, props.carouselContainerClass)}>
      <ImportedCarousel {...props} ref={ref} />
    </div>
  );
});

Carousel.displayName = "Carousel";
export default Carousel;
