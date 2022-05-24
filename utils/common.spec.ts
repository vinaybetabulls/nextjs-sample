import '@testing-library/jest-dom/extend-expect'
import { currencyFormatPartial, currencyFormat, priceFormat, priceFormatPartial, decodeQueryParam } from './common'

describe('Common utility', () => {
  describe('pricing', () => {
    it('processes GBP prices correctly', () => {
      expect(currencyFormat(7)).toEqual('£7.00')
      expect(currencyFormatPartial(7)).toEqual('£7')
      expect(currencyFormat(6000.1)).toEqual('£6,000.10')
      expect(currencyFormatPartial(6000.1)).toEqual('£6,000.10')
      expect(priceFormat({ centAmount: 700, currencyCode: 'GBP', fractionDigits: 2, formatted: '' })).toEqual('£7.00')
      expect(priceFormatPartial({ centAmount: 700, currencyCode: 'GBP', fractionDigits: 2, formatted: '' })).toEqual(
        '£7'
      )
    })
  })
  describe('url parsing', () => {
    it('renders the correct value from a query string', () => {
      expect(decodeQueryParam('really%20%28lovely%29%20flowers')).toEqual('really (lovely) flowers')
    })
  })
})
