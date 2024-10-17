import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(()=>{console.log("component mounted")},[])
  return (
    <div>
        <h1>Hello World</h1>
    </div>
  )
}

export default UseEffect