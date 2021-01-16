import React, {useReducer} from 'react'

const initialCount = {
    first:0
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {first:state.first+action.value }
        case 'decrement':
            return {first:state.first-action.value }
        case 'reset':
            return initialCount
        default:
            return state
    }
}


function ReducerCountTwo() {
    const [count,dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <h2>Counter Using UseReducer Two</h2>
            <h3>Count = {count.first}</h3>
            <button onClick={()=>dispatch({type:'increment', value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCountTwo
