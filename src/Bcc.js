import React, { useContext } from 'react'
import { exContext } from './Context_2'



const Bcc = () => {
    const {count,setcount}=useContext(exContext)
   const increment=()=>{
        setcount(count+1)
    }
  return (
    <div>
        <h1>Count</h1>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}
export default Bcc

