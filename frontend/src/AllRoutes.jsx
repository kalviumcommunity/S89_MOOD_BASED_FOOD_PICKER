import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Mood from './components/Mood';
import UpdateEntity from './components/UpdateEntity';
import FormPage from './components/Form';
import EntityList from './components/EntityList'; // ✅ FIXED: This import was missing
import Signup from './components/Signup';
import Login from './components/Login';
import UserData from './components/UserData';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/mood' element={<Mood />} />
      <Route path='/food' element={<EntityList />} />
      <Route path='/addfood' element={<FormPage />} />
      <Route path='/update/:id' element={<UpdateEntity />} />
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/userData' element={<UserData/>}/>
    </Routes>
  );
};

export default AllRoutes;
