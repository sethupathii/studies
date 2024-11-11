import React from 'react'

const DuplicateRemove = () => {
  const arr = [1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 1, 2, 9]

  const removeDupliacate = (data) => {
    return [...new Set(data)]
  }

  return (
    <div>
      <h1>DuplicateRemove</h1> <div>{arr}</div>
      <div>{removeDupliacate(arr)}</div>
    </div>
  )
}

export default DuplicateRemove
