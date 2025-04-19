import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Mood from './components/Mood';
import Navbar from './Navbar';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/mood' element={<Mood/>}/>
    </Routes>
    
  )
}

export default AllRoutes