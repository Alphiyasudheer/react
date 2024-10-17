import React,{ useState} from "react";
const Counter=()=>{
    const [count, setCount]= useState(0)
    const incrementCount = ()=>{
        setCount(count+1)
    }
    const decrementCount=()=>{
        setCount(count-1)
    }

return(
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
    </div>
)}
export default Counter