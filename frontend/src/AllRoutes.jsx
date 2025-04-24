import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Mood from './components/Mood';
import Navbar from './Navbar';
import EntityList from './components/Entitylist';
import FormPage from './components/Form';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/mood' element={<Mood/>}/>
        <Route path='/food' element={<EntityList/>}/>
        <Route path='/addfood' element={<FormPage/>}/>
    </Routes>
    
  )
}

export default AllRoutes