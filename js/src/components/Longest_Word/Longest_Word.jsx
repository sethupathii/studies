import React from 'react'

const Longest_Word = () => {
  const longestWord = (text) => {
    let words = text.split(' ')
    let value = ''
    for (let word of words) {
      if (word.length > value.length) {
        value = word
      }
    }
    return value
  }

  return (
    <>
      <div>LongestWord</div>
      <div>{longestWord('This is Longest sentebgdh Word')}</div>
    </>
  )
}

export default Longest_Word
