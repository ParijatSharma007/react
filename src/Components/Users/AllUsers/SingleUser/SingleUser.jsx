import React from 'react'
import JSONData from '../../UserData.json'
import { useParams } from 'react-router-dom'
const SingleUser = () => {
  const data = useParams()
  console.log(data);
//   console.log(typeof(data.id));
  const singleUser = JSONData.find((item) => data.id === String(item.id))
  // console.log(singleUser)
  return (
    <div style={{'text-align' : 'center'}}>
        <h1>{singleUser.name}</h1>
        <br/>
        {singleUser.username}
        <br/>
        {singleUser.email}
        <br/>
        {singleUser.address.street}
        <br/>
        {singleUser.address.city}
        <br/>
        {singleUser.address.zipcode}
        <br/>
    </div>
  )
}

export default SingleUser