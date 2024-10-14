import { useState } from 'react'
import Day_1 from './pages/Day_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Day_1 />
    </>
  )
}

export default App
