import React from 'react';

function Pose({pose, login, favPoseList, setFavPoseList, fetchPoses}) {

  const favPoses = login ? login.poses : null

  const isFavorite = favPoses ? favPoses.find(fav => fav.id === pose.id) : null

  function handlePoseFav() {
    let poses = login.poses
    if (login) {
    fetch(`http://localhost:4000/pose/${pose.id}/fav`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": login.id,
        "pose_id": pose.id
      }),
    })
    .then((resp) => resp.json())
    .then((data) => fetchPoses());
    } else {
      alert('Log in or create an account')
    };
  };

  return(
    <div id='pose' className='list'>
      <img src={pose.image} alt={pose.name}/>
      {isFavorite ?
      <button className='liked-btn' disabled>Added to Favorites ✓</button>
      : <button className='like-btn' onClick={handlePoseFav}>Add to Favorites</button>}      
      <h2>{pose.name + " Pose"}</h2>
      <ul>
        <li>{"Target body area: " + pose.target_body_area}</li>
        <li>{"Seated: " + (pose.seated ? "yes" : "no")}</li>
      </ul>
      <p>{pose.description}</p>
    </div>
  );
}

export default Pose;