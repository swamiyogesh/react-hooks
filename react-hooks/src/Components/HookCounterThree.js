import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <form>
            <h2>Hooks Counter using object</h2>
            <input type ='text' value ={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})} />
            <input type ='text' value ={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})} />
            <h3>Your name is {name.firstName} {name.lastName}</h3>
        </form>
    )
}

export default HookCounterThree
