import React, { useState } from 'react'
import useStyles from './../ZoomInImage.styles'
import { Magnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers'
import { Image } from '../../../common/props'

type Props = {
  image: Image
}

const DesktopZoomInImage = ({ image }: Props) => {
  const classes = useStyles()
  const [isZoomIn, setZoomIn] = useState(false)

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
  )
}

export default DesktopZoomInImage
