import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {


  return(
    <div id='navbar'>
      <div id='main-heading'>
        <h1>The Yogi Almanac</h1>
      </div>
      <div className='navbuttons'>
        <button className='navbutton'><Link to="/">Home</Link></button>
        <button className='navbutton'><Link to="/poses">Poses</Link></button>
        <button className='navbutton'><Link to="/mats">Mats</Link></button>
        <button className='navbutton'><Link to="/profile">Login/Sign Up</Link></button>
      </div>
    </div>
  );
}

export default Navbar;