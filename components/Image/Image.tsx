import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { ImageSize, ImageBreakpoint } from '../../common/props'
import { processImageUrl } from '../../utils/image'

export type Props = {
  /** Image url used as default image and for responsive images */
  imageUrl: string
  /** Alt text for img element */
  altText: string
  /** Different images at specific breakpoints using picture wrapper */
  images?: ImageBreakpoint[]
  /** Image breakpoint helpers for suggesting to browser which size image to retrieve */
  sizes?: ImageSize[]
  /** Image widths for responsive images in srcSet, only used if using imageUrl and not for images array */
  imageWidths?: number[]
  /** Class name for img element */
  className?: string
  /** Used only for helping browser know how much space to reserve before CSS loads */
  width?: string | number
  /** Used only for helping browser know how much space to reserve before CSS loads */
  height?: string | number
  /** Prevent dragging image if set to false */
  draggable?: boolean
  /** Lazy loading mode, defaults to lazy */
  loading?: 'eager' | 'lazy'
  /** Image click for zoom in gallery */
  onClick?: () => void
}

const ResponsiveImage = (props: Props) => {
  const {
    imageUrl,
    altText,
    className,
    imageWidths,
    width,
    height,
    draggable = false,
    loading = 'lazy',
    onClick,
  } = props
  const theme = useTheme()
  const srcSet = imageUrl && imageWidths?.map((size) => `${processImageUrl(imageUrl, { w: size })} ${size}w`).join(', ')
  const sizes = props.sizes
    ?.map((size) =>
      size.query && size.breakpoint
        ? `(${size.query}: ${theme.breakpoints.values[size.breakpoint]}px) ${size.width}`
        : `${size.width}`
    )
    .join(', ')
  return (
    <img
      src={imageUrl}
      alt={altText}
      draggable={draggable}
      loading={loading}
      width={width}
      height={height}
      className={className}
      srcSet={srcSet}
      sizes={sizes}
      onClick={onClick}
    />
  )
}

const ArtDirectedImage = (props: Props) => {
  const { imageUrl, images, altText, className, width, height, draggable = false, loading = 'lazy', onClick } = props
  const theme = useTheme()
  return (
    <picture className={className} onClick={onClick}>
      {images?.map((image) => (
        <source
          key={`${image.filename}-${image.query}-${image.breakpoint}`}
          media={image.query && image.breakpoint && `(${image.query}: ${theme.breakpoints.values[image.breakpoint]}px)`}
          srcSet={image.filename}
          sizes={image.sizes}
        />
      ))}
      <img src={imageUrl} alt={altText} draggable={draggable} loading={loading} width={width} height={height} />
    </picture>
  )
}

/** Use either imageUrl, imageWidths and sizes for a responsive image with different widths,
 * or images for an art directed image (wrapped in picture), with different urls at different breakpoints. */
const Image = (props: Props) =>
  !!props.images?.length ? <ArtDirectedImage {...props} /> : <ResponsiveImage {...props} />

export default Image
