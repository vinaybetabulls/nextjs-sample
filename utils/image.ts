const IMAGE_EXT = '.jpg'

/**
 * Default Amplience Dynamic media API parameters:
 * https://amplience.com/docs/dynamicmedia/dmapireference.html
 */
const defaultParams: ImageParams = {
  fmt: 'auto',
  qlt: 'default',
  'fmt.jp2.qlt': 80,
  bg: 'rgb(255, 255, 255)',
}

type ImageParams = { [key: string]: string | number | undefined }

/**
 * Converts all image urls to jpg
 * Adds/replaces params in the query string and appends templates
 */
export const processImageUrl = (urlString: string, params?: ImageParams, templates?: string[]) => {
  try {
    const url = new URL(urlString)
    // Only apply default params if not set on the URL already
    Object.keys(defaultParams).forEach(
      (key) => !url.searchParams.has(key) && url.searchParams.set(key, '' + defaultParams[key])
    )
    // Apply all params passed in
    params && Object.keys(params).forEach((key) => url.searchParams.set(key, '' + params[key]))
    const paramString = url.searchParams.toString()
    const templateString = templates?.join('&') || ''
    const query =
      templateString || paramString
        ? '?' + templateString + (templateString && paramString ? '&' : '') + paramString
        : ''
    const pathname = url.pathname.split('.')[0]
    return url.origin + pathname + IMAGE_EXT + query
  } catch (e) {
    // Invalid URL format
    return ''
  }
}
