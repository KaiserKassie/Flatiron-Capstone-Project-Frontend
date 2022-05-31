import React, { useState, useEffect} from 'react';
import User from './User';
import Home from './Home';
import Navbar from './Navbar';
import Poses from './Poses';
import Mats from './Mats';
import CreateUserForm from './CreateUserForm';
import LoginForm from './LoginForm';
import {Routes,Route} from "react-router-dom";

function App() {
  const [mats, setMats] = useState([]);
  const [poses, setPoses] = useState([]);
  const [login, setLogin] = useState();
  const [filteredPoses, setFilteredPoses] = useState([]);
  const [filteredMats, setFilteredMats] = useState([]);
  const [query, setQuery] = useState("");
  const [favMats, setFavMats] = useState([]);
  const [favPoseList, setFavPoseList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/logged_in").then((response) => {
      if (response.ok) {
        response.json().then((user) => setLogin(user));
      }
    });
  }, []);

  function fetchMats() {
    fetch("http://localhost:4000/mats.json")
    .then((resp) => resp.json())
    .then(matData => {
      setMats(matData);
    })
    .catch(error => {
      console.log('Error fetching mat data: ' + error);
    })
  };

  useEffect(fetchMats, []);

  function fetchPoses() {
    fetch("http://localhost:4000/poses.json")
    .then((resp) => resp.json())
    .then(poseData => {
      setPoses(poseData);
    })
    .catch(error => {
      console.log('Error fetching data: ' + error);
    })
  };

  useEffect(fetchPoses, [])

  return (
    <>
      <Navbar login={login} setLogin={setLogin}/>
      <Routes>
        <Route path="/profile" element={<User login={login}/>}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="/poses" element={<Poses fetchPoses={fetchPoses} favPoseList={favPoseList} setFavPoseList={setFavPoseList} query={query} setQuery={setQuery} setFilteredPoses={setFilteredPoses} poses={poses} setPoses={setPoses} login={login}/>}/>
        <Route path="/mats" element={<Mats query={query} setQuery={setQuery} setFilteredMats={setFilteredMats} mats={mats} setMats={setMats} login={login}/>}/>
        <Route path="/login" element={<LoginForm login={login} setLogin={setLogin}/>}/>
        <Route path="/create_user" element={<CreateUserForm login={login} setLogin={setLogin}/>}/>
      </Routes>
    </>
  );
}

export default App;