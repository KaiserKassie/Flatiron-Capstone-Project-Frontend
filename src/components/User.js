import React from 'react';
import FavMats from './FavMats'
import FavPoses from './FavPoses'
import NewCalendar from './NewCalendar'
import Calendar from './Calendar'

function User({login}) {

  const favPoses = login.poses
  const favMats = login.mats
  
  const renderFavPoses = favPoses.map((favPose) => (
    <FavPoses key={favPose.id} favPose={favPose} favPoses={favPoses}/>
  ));

  const renderFavMats = favMats.map((favMat) => (
    <FavMats key={favMat.id} favMat={favMat}/>
  ));

  return(
    <div id='user'>
      <h1 id="hi">Welcome, {login.first_name}!</h1>
      <div id='calendar'>
        <h1>Yoga Tracker</h1>
        {/* <NewCalendar /> */}
        <Calendar login={login}/>
      </div>
      <div>
        <div className="fav-lists">
          <h2>Your Favorite Mats</h2>
          {renderFavMats}
        </div>
        <div className="fav-lists">
          <h2>Your Favorite Poses</h2>
          {renderFavPoses}
        </div>       
      </div>
    </div>
  );
}

export default User;