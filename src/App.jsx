import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Head_Tail from './pages/Head_Tail'

function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/head_tail' element={<Head_Tail/>} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
