import React from 'react';
import Mat from './Mat';
import MatFilter from './MatFilter';

function Mats({setFilteredMats, mats, setMats, login, query, setQuery }) {


  const renderMats = (query === "") ? mats.map((mat) => (
    <Mat login={login} key={mat.id} mat={mat}/>
  )) : mats
  .filter((thisMat) => thisMat.name.toLowerCase().includes(query.toLowerCase()) || thisMat.brand.toLowerCase().includes(query.toLowerCase()))
  .map((thisMat) => (<Mat key={thisMat.id} mat={thisMat} login={login}/>));
  
  return(
    <div id='mats' className='lists'>
      <h1 className='title'>Yoga Mats</h1>
      <MatFilter login={login} mats={mats} setQuery={setQuery}/>
      {renderMats}
    </div>
  );
}

export default Mats;