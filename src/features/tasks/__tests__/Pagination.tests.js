import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from '../Pagination'

describe('Pagination tests', () => {
  it('Displays the next button', () => {
    const previous = false
    const next = true
    const handlePrevious = jest.fn()
    const handleNext = jest.fn()
    render(
      <Pagination
        next={next}
        previous={previous}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />,
    )
    const nextButton = screen.queryByTestId('pagination-next')
    const prevButton = screen.queryByTestId('pagination-previous')
    expect(nextButton).toBeInTheDocument()
    expect(prevButton).toBeNull()
  })

  it('Displays both next and previous button', () => {
    const previous = true
    const next = true
    const handlePrevious = jest.fn()
    const handleNext = jest.fn()
    render(
      <Pagination
        next={next}
        previous={previous}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />,
    )
    const nextButton = screen.queryByTestId('pagination-next')
    const prevButton = screen.queryByTestId('pagination-previous')
    expect(nextButton).toBeInTheDocument()
    expect(prevButton).toBeInTheDocument()
  })

  it('Fires the onClick event when clicked', async () => {
    const user = userEvent.setup()
    const previous = true
    const next = true
    const handlePrevious = jest.fn()
    const handleNext = jest.fn()
    render(
      <Pagination
        next={next}
        previous={previous}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />,
    )
    const nextButton = screen.queryByTestId('pagination-next')
    await user.click(nextButton)
    expect(handleNext).toHaveBeenCalled()
  })
})
