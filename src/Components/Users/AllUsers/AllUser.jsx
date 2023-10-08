import React from 'react'
import './AllUser.css'
import JSONData from '../UserData.json'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const AllUser = () => {
  // const [users, setUsers] = useState([])


  const User = JSONData.map((user) => (
    <li key={user.id}>
      {console.log(user.id)}
      <Link to={`/all-user/${user.id}`}>{user.username}</Link>
    </li>
  ))
  return (
    <div style={{ 'text-align': 'center' }}>
      <h1>All Users</h1>
      <ul>{User}</ul>
    </div>
  )
}

export default AllUser