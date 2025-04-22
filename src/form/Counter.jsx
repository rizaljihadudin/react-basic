import { useState } from 'react';

export default function Counter(){
    let [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }

    return (
        <>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <div>
                <h1>Count : {count}</h1>
            </div>
        </>
    )
}