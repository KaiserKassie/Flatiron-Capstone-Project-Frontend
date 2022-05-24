import React from 'react';
import Mat from './Mat';
import MatFilter from './MatFilter';

function Mats({mats}) {
  const renderMats = mats.map((mat) => (
    <Mat key={mat.id} mat={mat}/>
  ));
  
  return(
    <div id='mats'>
      <h1>Yoga Mats</h1>
      <MatFilter mats={mats}/>
      {renderMats}
    </div>
  );
}

export default Mats;