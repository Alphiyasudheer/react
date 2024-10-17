import React, { createContext, useState } from 'react'
import Abc from './Abc';
export const myContext = createContext(null);

const Context = () => {
    const [count,setCount]=useState(4)

  return (
    <div>
        <myContext.Provider value={{count,setCount}}>
            <Abc/>

        </myContext.Provider>

    </div>
  )
}

export default Context