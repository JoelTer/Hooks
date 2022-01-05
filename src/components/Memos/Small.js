import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log("Show Again")
  return (
    <small>
      { value }
    </small>
  )
})