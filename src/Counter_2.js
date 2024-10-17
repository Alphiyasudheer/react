import React from 'react'
import useCount from './useCount'
import { useState } from 'react'


const Counter_2 = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    useCount(count)
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={incrementCount}>+</button>

        </div>
    )
}

export default Counter_2