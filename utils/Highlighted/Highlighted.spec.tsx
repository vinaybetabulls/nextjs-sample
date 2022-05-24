import React from 'react'
import { render } from '@testing-library/react'
import Highlighted from './Highlighted'

describe('Highlighted snapshot tests', () => {
  it('renders the correct snapshot for Highlighted text', () => {
    const { container } = render(<Highlighted text="testing" highlight="test" />)
    expect(container).toMatchSnapshot()
  })
  it('renders the correct snapshot when the highlighted text does not match', () => {
    const { container } = render(<Highlighted text="testing" highlight="sorry" />)
    expect(container).toMatchSnapshot()
  })
})
