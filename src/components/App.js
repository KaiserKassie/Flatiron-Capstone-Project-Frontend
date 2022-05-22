import React from 'react';
import User from './User';
import Home from './Home';
import Navbar from './Navbar';
import Poses from './Poses';
import Mats from './Mats';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<User />}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="/poses" element={<Poses />}/>
        <Route path="/mats" element={<Mats />}/>
      </Routes>
    </>
  );
}

export default App;