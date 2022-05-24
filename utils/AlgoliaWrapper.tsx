import React from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch, Configure, Index } from 'react-instantsearch-dom'

type Props = {
  children: React.ReactChild
  mock?: boolean
  indexNames?: string[]
  hitsPerPage?: number
}

const AlgoliaWrapper = ({ children, mock, indexNames, hitsPerPage }: Props) => {
  // To be replaced by a mock client
  const searchClient = mock
    ? { search: () => {} }
    : algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!)

  return (
    <InstantSearch searchClient={searchClient} indexName={(indexNames && indexNames[0]) || 'dev_product_uk_price_asc'}>
      {indexNames && indexNames.map((name: string, index) => <Index key={index} indexName={name} />)}
      <Configure hitsPerPage={hitsPerPage || 12} distinct />
      {children}
    </InstantSearch>
  )
}

export default AlgoliaWrapper
