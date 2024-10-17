import React, { createContext,useState} from 'react'
import Bcc from './Bcc';
export const exContext=createContext(null);

const Context_2 = () => {
    const[count,setcount]=useState(1)
    
  return (
    <div >
        <exContext.Provider value={{count,setcount}}>
            <Bcc/>
        </exContext.Provider>
    </div>
  )
}

export default Context_2