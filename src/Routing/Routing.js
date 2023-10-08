import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import { Service } from '../Components/Service/Service'
import Feature from '../Components/Features/Feature'
import Header from '../Layouts/Header/Header'
import PageNotFound from '../Layouts/PageNotFound'
import AllUser from '../Components/Users/AllUsers/AllUser'
import SingleUser from '../Components/Users/AllUsers/SingleUser/SingleUser'
import MyForm from '../Components/Form/MyForm'
import Posts from '../Components/Posts/Posts'
import PostBody from '../Components/Posts/PostBody'

const Routing = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='about-page/:name/:id' element = {<About/>}/>
            <Route path='service-page' element = {<Service/>}/>
            <Route path='feature-page' element = {<Feature/>}/>
            <Route path='all-user' element = {<AllUser/>}/>
            <Route path='all-user/:id' element = {<SingleUser/>}/>
            <Route path='submit-form' element = {<MyForm/>}/>
            <Route path='posts' element = {<Posts/>}/>
            <Route path='posts/:id' element = {<PostBody/>}/>
            <Route path='*' element = {<PageNotFound/>}/>
        </Routes>
    </Router>
  )
}

export default Routing