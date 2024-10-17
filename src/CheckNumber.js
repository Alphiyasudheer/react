import React,{useState} from 'react'

const CheckNumber = () => {
    const [num, setNum] = useState('');

    const handleChange = (e) => {
        setNum(e.target.value)
    }

    return (
        

        <div>
            <h1>Number Check</h1>
            <input type="text" placeholder='Enter Number' value={num} onChange={handleChange} />

            {num > 0 ? (
                <h1>+ve number</h1>
            ) : num < 0 ? (
                <h1>-ve number</h1>
            ) : (
                <h1>the number is 0</h1>
            )}
           
        </div>

    );
  
}

export default CheckNumber