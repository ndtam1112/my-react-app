import { useState } from 'react'

function CounterApp() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Số lần click: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterApp
