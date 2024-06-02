import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Create from '../components/Create'
import Games from '../components/Games'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Details from '../components/Details'
import NotFound from '../components/NotFound'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/AddGame' element={<Create/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/Game/:id' element={<Details/>} />
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRoutes