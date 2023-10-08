import React from 'react'
import './About.css'
import { useParams } from 'react-router-dom'

const About = () => {
  const data = useParams()
  return (
    <div>About
      <br/>
      <h1>Hi, I am {data.name}</h1>
      <h2>id : {data.id}</h2>
    </div>
  )
}

export default About