import React, {useState, useEffect} from 'react'

function IntervalHook() {
    const [count,setCount] = useState(0)

    const tick = ()=>{
        setCount(count+1)
    }

    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h2>Interval Hook Counter</h2>
            <h3>{count}</h3>
        </div>
    )
}

export default IntervalHook
