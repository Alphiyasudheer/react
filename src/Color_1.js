import React, { useState } from 'react'

const Color_1 = () => {
    const[change,setColour]=useState('green')
    const changeColor=()=>{
        setColour('red')
    }
  return (
    <div>
        <h1>My favorite color is {change}</h1>
        <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default Color_1