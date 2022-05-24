import { Props } from './Image'

const imageUrl = 'https://i8.amplience.net/i/gradientedge/W10971MS-s1'

export const responsiveImageProps: Props = {
  imageUrl,
  sizes: [
    {
      breakpoint: 'sm',
      query: 'max-width',
      width: '100vw',
    },
    {
      breakpoint: 'lg',
      query: 'min-width',
      width: '50vw',
    },
  ],
  imageWidths: [400, 600, 900],
  altText: 'This is accessible',
}

export const artDirectedImageProps: Props = {
  imageUrl,
  images: [
    {
      breakpoint: 'md',
      query: 'max-width',
      filename: `${imageUrl}?w=400&flipv=true`,
    },
    {
      breakpoint: 'lg',
      query: 'min-width',
      filename: `${imageUrl}?w=900`,
    },
  ],
  altText: 'This is accessible',
}
