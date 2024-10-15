import { useState } from 'react'
import Day_1 from './pages/Day_1'
import ReverseString from './components/Reverse String/ReverseString'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReverseString />
    </>
  )
}

export default App
