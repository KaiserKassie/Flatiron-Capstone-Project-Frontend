import React from 'react';
import FavMats from './FavMats'
import FavPoses from './FavPoses'

function User() {


  return(
    <div id='user'>
      <h2>Hi, Name!</h2>
      <FavMats />
      <FavPoses />
    </div>
  );
}

export default User;