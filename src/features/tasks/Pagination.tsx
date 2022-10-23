import React from 'react'

type Props = {
  previous: boolean
  next: boolean
  handlePrevious: () => void
  handleNext: () => void
}

export const Pagination = (props: Props) => {
  const { previous, next, handlePrevious, handleNext } = props
  return (
    <div>
      {previous && (
        <button data-testid="pagination-previous" onClick={handlePrevious}>
          Previous
        </button>
      )}
      {next && (
        <button data-testid="pagination-next" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  )
}
