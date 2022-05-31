import React from 'react';

function MatFilter({mats, setQuery}) {


  return(
    <div className='filter'>
      <input type='text' className="search" placeholder="Search mats by name or brand"onChange={(e) => setQuery(e.target.value)}></input>
    </div>
  );
}

export default MatFilter;