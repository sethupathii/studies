import React from 'react'

const ReverseStringTwo = () => {

    function reverseString(str){
     return str.split("").reverse().join("")
    }

    
  return (
    <div>
        Reverse String
    </div>
  )
}

export default ReverseStringTwo