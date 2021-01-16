import React, {useState}  from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            <h2>Hooks Counter using prevState</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo
