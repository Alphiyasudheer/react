import React, { useEffect,useState } from 'react'

const Counter_UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => { console.log('Component mount or count updated') }, [count]);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <>
            <div>
                <h4>Counter</h4>
                <h1>{count}</h1>
                <button onClick={incrementCount} className='btn-primary'>increment</button>
            </div>

        </>
    )
}

export default Counter_UseEffect