import { useState } from 'react'

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogDetail from './pages/BlogDetail'

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      
      
      <Route path='/blog/:id' element={<BlogDetail/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About/>}/>
      
      </Routes>
      
    </>
  )
}

export default App
