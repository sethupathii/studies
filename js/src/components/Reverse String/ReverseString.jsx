import React, { useEffect } from 'react'

const ReverseString = () => {
  const reverseString = (text) => {
    console.log('test', text)
    return text.split('').reverse().join('')
  }

  const defaultMethod = (text) => {
    let reverseText = ''

    for (let i = text.length - 1; i >= 0; i--) {
      reverseText += text[i]
    }

    return reverseText
  }

  return (
    <>
      <div>ReverseString</div>
      <div>{reverseString('ReverseString')}</div>
      <div>{defaultMethod('Morni')}</div>
    </>
  )
}

export default ReverseString
