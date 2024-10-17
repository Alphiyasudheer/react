import React,{useState} from 'react'

const EvenOdd = () => {
    const [num, setNum] = useState('');

    const handleChange = (e) => {
        setNum(e.target.value)
  return (
    <div>
         <h1>Check Even or Odd</h1>
            <input type="number" placeholder='Enter Number' value={num} onChange={handleChange} />

            {num%2==0  ? (
                <h1>Even number</h1>
            ) : (<h1>Odd number</h1>)
            }
           
    </div>
  )
}
}
export default EvenOdd