import { Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CarouselRef from "react-multi-carousel";
import Carousel from "../Carousel/Carousel";
import { useTheme } from "@material-ui/core/styles";
import RoundButton from "../RoundButton/RoundButton";
import { Images } from "../../common/props";
import { useMediaQuery } from "react-responsive";
import { useTheme as muiUseTheme } from "@material-ui/core";
import ZoomInImage from "../ZoomInImage/ZoomInImage";
import useStyles from "./ZoomInImageGallery.styles";

type ButtonProps = {
  next: () => void;
  previous: () => void;
};

const CustomButtonGroup = ({ next, previous }: ButtonProps) => {
  const classes = useStyles();

  return (
    <div className={classes.customButtonGroup}>
      <RoundButton
        className={classes.leftButton}
        ariaLabel={"chevron left arrow"}
        icon={"chevron_left"}
        onClick={previous}
      />
      <RoundButton
        ariaLabel={"chevron right arrow"}
        icon={"chevron_right"}
        onClick={next}
        className={classes.rightButton}
      />
    </div>
  );
};
export type Props = {
  images: Images;
};
const ImageZoomInGallery = ({ images }: Props) => {
  const carouselRef = React.createRef<CarouselRef>();
  const classes = useStyles();
  const muiTheme = muiUseTheme();
  // const isMobile = !useMediaQuery({ query: `(min-width: ${muiTheme.breakpoints.values.sm}px)` })
  const [isMobile, setIsMobile] = useState(true);
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(1);
  const { sm, md, xl } = theme.breakpoints.values;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: xl },
      items: 1,
    },
    small: {
      breakpoint: { max: xl - 1, min: md },
      items: 1,
    },
    tablet: {
      breakpoint: { max: md - 1, min: sm },
      items: 1,
    },
    mobile: {
      breakpoint: { max: sm - 1, min: 0 },
      items: 1,
    },
  };
  const moveToNextSlide = () => {
    carouselRef.current?.next(1);
  };
  const moveToPreviouSlide = () => {
    carouselRef.current?.previous(1);
  };

  const updateCurrentState = () => setCurrentSlide(Math.random());

  const deviceType = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator?.userAgent
      )
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window?.addEventListener("orientationchange", updateCurrentState);
    return () => {
      window?.removeEventListener("orientationchange", updateCurrentState);
    };
  }, []);

  useEffect(() => {
    deviceType();
  }, []);

  return (
    <>
      {!!images?.length && (
        <div className={classes.carouselContainer}>
          <Carousel
            containerClass={classes.carousel}
            sliderClass={classes.slider}
            responsive={responsive}
            arrows={false}
            autoPlay={false}
            itemClass={classes.carouselItem}
            ssr={true}
            showDots={false}
            renderDotsOutside={true}
            infinite={true}
            ref={carouselRef}
            partialVisible={false}
            customButtonGroup={
              <CustomButtonGroup
                next={moveToNextSlide}
                previous={moveToPreviouSlide}
              />
            }
            renderButtonGroupOutside
            carouselContainerClass={classes.carouselContainer}
            swipeable={false}
            draggable={false}
            afterChange={updateCurrentState}
          >
            {images.map((image) => (
              <ZoomInImage
                image={image}
                key={currentSlide}
                isMobile={isMobile}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};
export default ImageZoomInGallery;
