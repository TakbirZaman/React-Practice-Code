import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleadd = () => {
        const newCount = count + 3;
        setCount(newCount);
    }
    const counterStyle = {
        border : '2px solid black',
    }
    return (
        <div style={counterStyle}>
            <h1>Counter: {count}</h1>
            <button onClick={handleadd}>Add</button>
        </div>
    )
}   