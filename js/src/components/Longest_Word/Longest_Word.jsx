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

  const valueTwo = (text) => {
    let newOne = text.split(' ')

    return newOne.reduce((acc, cur) => {
      return cur.length > acc.length ? cur : acc
    })
  }

  return (
    <>
      <div>LongestWord</div>
      <div>{longestWord('This is Longest sente Word')}</div>
      <div>{valueTwo('This is Longest sente sentences')}</div>
    </>
  )
}

export default Longest_Word
