import React from 'react'

const Event = () => {
   
        const clickHandle=()=>{
            console.log("You clicked me");
            
        }
    
    const clickDoubleClick=()=>{
        console.log("You double clicked me");
        
    }
    const imageMouseOver=()=>{
        console.log('You over the image');
        
    }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={clickHandle}>Click me</button>
        <button onDoubleClick={clickDoubleClick}>Double Click</button>
        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
         onMouseOver={imageMouseOver} alt="" />
    </div>
  )
}

export default Event