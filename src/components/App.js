import React, { useState, useEffect} from 'react';
import User from './User';
import Home from './Home';
import Navbar from './Navbar';
import Poses from './Poses';
import Mats from './Mats';
import {Routes,Route} from "react-router-dom";

function App() {
  const [mats, setMats] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/mats.json")
    .then((resp) => resp.json())
    .then(matData => setMats(matData))
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<User />}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="/poses" element={<Poses />}/>
        <Route path="/mats" element={<Mats mats={mats}/>}/>
      </Routes>
    </>
  );
}

export default App;