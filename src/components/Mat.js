import React from 'react';

function Mat({mat, login}) {

  const favMats = login ? login.mats : null

  const isFavorite = favMats ? favMats.find(fav => fav.id === mat.id) : null
  
  function handleMatFav() {
    if (login) {
    fetch(`http://localhost:4000/mat/${mat.id}/fav`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: login.id,
        mat_id: mat.id
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    } else {
      alert('Log in or create an account')
    }
  };

  return(
    <div id='mat' className='list'>
      <img src={mat.image} alt={mat.name}/>

      {isFavorite ?
      <button className='liked-btn' disabled>Added to Favorites ✓</button>
      : <button className='like-btn' onClick={handleMatFav}>Add to Favorites</button>}
      <h2>{mat.name + " Yoga Mat"}</h2>
      <h3>{mat.brand}</h3>
      <ul>
        <li>{"Available Widths: " + mat.width1 + "`\"`" + (mat.width2 != null  ? ", " + mat.width2 + "`\"`" : "") + (mat.width3 != null ? ", " + mat.width3 + "`\"`" : "")}</li>
        <li>{"Available Lengths: " + mat.length1 + "`\"`" + (mat.length2 != null ? ", " + mat.length2 + "`\"`" : "")}</li>
        <li>{"Thickness: " + mat.thickness + "mm"}</li>
        <li>{"Weight: " + mat.weight + "lb"}</li>
      </ul>
    </div>
  );
}

export default Mat;



