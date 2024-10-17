import React, {useState} from 'react'


const Colour = () => {
    const[change,setColour]= useState('green');
    const changeColour = () => {
        setColour('red')
    }
  return (
    <div>
        <h1>My favourite colour is {change}</h1>
        <button onClick={changeColour}>Change colour</button>

    </div>
  )
}

export default Colour