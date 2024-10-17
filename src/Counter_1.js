import React,{useState} from 'react'

const Counter_1 = () => {
    const [count,setCount]=useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter_1