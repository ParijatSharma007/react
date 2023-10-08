import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostBody = () => {

  const api_url = 'https://jsonplaceholder.typicode.com/posts'
  const {id} = useParams()
  const [body, setBody] = useState()

    useEffect(()=> {
        axios.get(api_url).then(
          res => {
            setBody(res.data.find(item => id === String(item.id)).body)
          }
        )
    }, [id])



  return (
    <div>{body}
    {console.log(id)}
    {console.log(body)}</div>
  )
}

export default PostBody