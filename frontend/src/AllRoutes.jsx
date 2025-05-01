import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Mood from './components/Mood';
import Navbar from './Navbar';
import UpdateEntity from './components/UpdateEntity';
import FormPage from './components/Form';
import EntityList from './components/EntityList'; // ✅ FIXED: This import was missing

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/mood' element={<Mood />} />
      <Route path='/food' element={<EntityList />} />
      <Route path='/addfood' element={<FormPage />} />
      <Route path='/update/:id' element={<UpdateEntity />} />
    </Routes>
  );
};

export default AllRoutes;
