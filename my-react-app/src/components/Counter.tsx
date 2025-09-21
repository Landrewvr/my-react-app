import { useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);

    return (
        <div>
            <h2> The current count is on: {count}</h2>
            <button onClick={()=> setCounter((count) => count + 1)}>Increment Count</button>
            <button onClick={()=> setCounter((count) => count - 1)}>Decrement Count</button>
            <button onClick={()=> setCounter(0)}>Reset the Count</button>
        </div>
    );
}

export default Counter;
