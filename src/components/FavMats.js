import React from 'react';

function FavMats({favMat}) {


  return(
    <div className='fav-list'>
      <img src={favMat.image} alt={favMat.name}/>
      <button className='like-btn'>Remove from favorites</button>
      <h3>{favMat.name + " Yoga Mat"}</h3>
      <h4>{favMat.brand}</h4>
    </div>
  );
}

export default FavMats;