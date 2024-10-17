import React,{useEffect} from 'react'

const useCount = (count) => {
  useEffect(()=>{
    document.title=`Count ${count}`},[count])};


export default useCount;