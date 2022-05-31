import React from 'react';

function FavPoses({favPose}) {

  function deleteFav() {
    fetch(`http://localhost:4000/pose/${favPose.id}/unfav`, {
      method: "DELETE"
    })
    .then((resp) => console.log(resp))
  }

  return(
    <div className='fav-list'>
      <img src={favPose.image} alt={favPose.name}/>
      <button className='like-btn' onClick={deleteFav}>Remove from favorites</button>
      <h2>{favPose.name + " Pose"}</h2>
      <p>{favPose.description}</p>
      <ul>
        <li>{"Target body area: " + favPose.target_body_area}</li>
        <li>{"Seated: " + (favPose.seated ? "yes" : "no")}</li>
      </ul>
    </div>
  );
}

export default FavPoses;