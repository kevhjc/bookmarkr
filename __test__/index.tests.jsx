import React from 'react'
import { render, screen } from '../test-utils'
import Home from '@pages/index'

describe('Home', () => {
  it('should render the heading', () => {
    render(<Home />)

    const heading = screen.getByText(
      /Testing Next.js With Jest and React Testing Library/i
    )

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument()
  })
})
