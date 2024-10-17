import React, { useContext } from 'react'
import { myContext } from './Context'

const Abc = () => {
    const {count,setCount}=useContext(myContext)
    const decrementCount=()=>{
      setCount(count-1)
    }
  return (
    <div>
        <h1>
          Count
        </h1>
        <h1>{count}</h1>
        <button onClick={decrementCount}>-</button>

    </div>
  )
}

export default Abc