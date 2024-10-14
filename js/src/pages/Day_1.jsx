import React, { useState } from 'react'

const Day_1 = () => {
  const [arrItems, setArrItems] = useState([
    { key: 0, value: 'Item 1' },
    { key: 1, value: 'Item 2' },
    { key: 2, value: 'Item 3' },
    { key: 3, value: 'Item 4' },
  ])

  const [alphaItems, setAlphaItems] = useState([
    { key: 0, value: 'A' },
    { key: 1, value: 'B' },
    { key: 2, value: 'C' },
    { key: 3, value: 'D' },
  ])

  const [selectedItems, setSelectedItems] = useState({})

  console.log("S123",selectedItems);
  

  const handleCheckboxChange = (key) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [key]: !prevSelectedItems[key],
    }))
  }

  const handleSwap = () => {
    const selectedKeys = Object.keys(selectedItems) 
    const swappedArrItems = arrItems.map((item) => {
      if (selectedKeys.includes(item.key.toString())) {
        return alphaItems.find((alphaItem) => alphaItem.key === item.key)
      }
      return item
    })
    const swappedAlphaItems = alphaItems.map((alphaItem) => {
      if (selectedKeys.includes(alphaItem.key.toString())) {
        return arrItems.find((arrItem) => arrItem.key === alphaItem.key)
      }
      return alphaItem
    })
    setArrItems(swappedArrItems)
    setAlphaItems(swappedAlphaItems)
  }

  return (
    <div>
      <div>
        {arrItems.map(({ key, value }) => (
          <div key={key}>
            <input
              type="checkbox"
              checked={selectedItems[key]}
              onChange={() => handleCheckboxChange(key)}
            />
            <label>{value}</label>
          </div>
        ))}
      </div>
      <div>
        {alphaItems.map(({ key, value }) => (
          <div key={key}>
            <label>{value}</label>
          </div>
        ))}
      </div>
      <button onClick={handleSwap}>Swap</button>
    </div>
  )
}

export default Day_1
