import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {

    const api_url = 'https://jsonplaceholder.typicode.com/posts'

    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(api_url).then(
            (res) => {
                console.log("response : ", res.data);
                setState(res.data)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }, [])

    return (
        <>
            <h1>Posts</h1>
            {
                state.map((item) => (
                    <div key = {item.id}>
                        <Link to = {`/posts/${item.id}`}>{item.title}</Link>
                        <br/>
                    </div>
                ))
            }
            
        </>)

}


export default Posts