import React, {useContext} from 'react'
import {userContext, channelContext} from '../App'

function ContextHook() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
    return (
        <div>
            <h2>Context Hook</h2>
            <h3>{user} - {channel}</h3>
            
        </div>
    )
}

export default ContextHook
