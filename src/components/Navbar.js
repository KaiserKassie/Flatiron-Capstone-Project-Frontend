import React from 'react';
import {Link} from 'react-router-dom'

function Navbar({login, setLogin}) {

  function logout() {
    fetch('http://localhost:4000/logout', { method: 'DELETE' })
    .then(setLogin(null))
  }

  return(
    <div id='navbar'>
      <div id='main-heading'>
        <h1>The Yogi Handbook</h1>
      </div>
      {/* <button id='display-button'>Menu</button> */}
      <div className='menu'>
        <button className='navbutton'><Link to="/">Home</Link></button>
        <button className='navbutton'><Link to="/poses">Poses</Link></button>
        <button className='navbutton'><Link to="/mats">Mats</Link></button>
        {!login ? 
        <button className='navbutton'><Link to="/login">Login/Sign Up</Link></button> :
        <span>
          <button className='navbutton'><Link to="/profile">Profile</Link></button>
          <button className='navbutton' onClick={logout}><Link to="/">Logout</Link></button>
        </span>
        } 
      </div>
    </div>
  );
}

export default Navbar;