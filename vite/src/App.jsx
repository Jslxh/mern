/*import User from './components/User'
import Hii from './components/Hii'
import For from './components/For'*/

/*    <User name = 'Jay Jeon' dept = 'M.com' skills = {['HTML','CSS','JS','Python']}/>
      <br></br>
      <Hii foods = {['bibimbap','kimchi','soju','pasta','jjangmeyeon','ramyeon']}/>
      <br></br>
      <For num = {[1,2,3,4,5,6,7,8,9]}/> */

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import State from './hooks/State'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path ="/" Component={Home}/>
        <Route path ="/about" Component={About}/>
        <Route path ="/contact" Component={Contact}/>
        <Route path ="/services" Component={Services}/>
        <Route path ="/navbar" Component={Navbar}/>
        <Route path ="/state" element={<State/>}/>
      </Routes>
    </>
  )   
}

export default App