import React from 'react'
import Child_1 from './Child_1'

const Parent_1 = () => {
  return (
    <div>
        <h1>Parent Component</h1>
        <Child_1 name="John" age={25}/>
        <Child_1 name="Alice" age={30}/>
        
        
        
    </div>
  )
}

export default Parent_1