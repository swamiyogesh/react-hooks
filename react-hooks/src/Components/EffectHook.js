import React, {useState, useEffect} from 'react'

function EffectHook() {

    const [count, setCount] = useState(0)
    const [name,setName] =useState('')

    useEffect(() => {
        console.log('updating')
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <h2>Effect Hook Counter</h2>
            <input type='text' value ={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default EffectHook
