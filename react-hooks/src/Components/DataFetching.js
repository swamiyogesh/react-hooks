import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setposts] = useState({})
    const [id, setId] =useState(1)
    const [buttonid, setButtonid] = useState(1)

    const clickHandler=()=>{
        setButtonid(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
        .then(res=>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[buttonid])
    return (
        <div>
            <h2>Get single post</h2>
            <input value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={clickHandler}>Fetch id</button>
            <h2>{posts.title}</h2>
            {/* <ul>
                {
                    posts.map(post=><li value ={post.id}>{post.title}</li>)
                    
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
