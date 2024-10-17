import React from 'react'

const Child_1 = (props) => {
  return (
    <div>
        <h2>
            Hello,{props.name}
            <p>you are {props.age} years old</p>
        </h2>
    </div>
  )
}

export default Child_1