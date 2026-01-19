import { useState } from 'react'

type CounterProps = {
  initialValue?: number
  maxValue?: number
}

function Counter({ initialValue = 0, maxValue = Infinity }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const decrement = () => setCount((c) => c - 1)
  const increment = () => setCount((c) => c + 1)

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="bg-blue-500 hover:bg-blue-800 text-white py-1.5 px-4 rounded-md duration-300 disabled:opacity-50"
        disabled={count <= 0}
      >
        -
      </button>
      <span className="text-xl font-bold">{count}</span>
      {count < maxValue && (
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-800 text-white py-1.5 px-4 rounded-md duration-300"
        >
          +
        </button>
      )}
    </div>
  )
}

export default Counter
