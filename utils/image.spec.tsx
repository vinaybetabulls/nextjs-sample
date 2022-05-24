import '@testing-library/jest-dom/extend-expect'
import { processImageUrl } from './image'

describe('Image utility', () => {
  it('processes an image url correctly adding a param', () => {
    const result = processImageUrl('https://test.com/test.png', { param: 'value' })
    expect(result).toEqual(
      'https://test.com/test.jpg?fmt=auto&qlt=default&fmt.jp2.qlt=80&bg=rgb%28255%2C+255%2C+255%29&param=value'
    )
  })

  it('processes an image url correctly adding a template', () => {
    const result = processImageUrl('https://test.com/test.png', undefined, ['$template$'])
    expect(result).toEqual(
      'https://test.com/test.jpg?$template$&fmt=auto&qlt=default&fmt.jp2.qlt=80&bg=rgb%28255%2C+255%2C+255%29'
    )
  })

  it('processes an image url correctly with existing params and templates', () => {
    const result = processImageUrl('https://test.com/test.png?ext_param=ext_value', { param: 'value' }, ['$template$'])
    expect(result).toEqual(
      'https://test.com/test.jpg?$template$&ext_param=ext_value&fmt=auto&qlt=default&fmt.jp2.qlt=80&bg=rgb%28255%2C+255%2C+255%29&param=value'
    )
  })

  it('processes an image url correctly with existing quality parameters', () => {
    const result = processImageUrl('https://test.com/test.png', { param: 'value', qlt: 90 }, ['$template$'])
    expect(result).toEqual(
      'https://test.com/test.jpg?$template$&fmt=auto&qlt=90&fmt.jp2.qlt=80&bg=rgb%28255%2C+255%2C+255%29&param=value'
    )
  })

  it('returns empty string for an invalid url', () => {
    const result = processImageUrl('test.png?ext_param=ext_value', { param: 'value' }, ['$template$'])
    expect(result).toEqual('')
  })
})
