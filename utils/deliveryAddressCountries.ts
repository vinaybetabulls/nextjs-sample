import { billingAddressCountries } from './billingAddressCountries'

export const deliveryAddressCountries = billingAddressCountries.filter(
  (countryDetails: any) =>
    !['Benin', 'Bonaire', 'Cuba', 'Gabon', 'Kyrgyzstan', 'Syria'].includes(countryDetails.country)
)
