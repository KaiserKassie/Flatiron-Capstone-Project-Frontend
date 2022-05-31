import React from 'react';

function PoseFilter({poses, setQuery, query, setPoses, setFilteredPoses}) {  

  return(
    <div className='filter'>
      <input type='text' className="search" placeholder="Search poses by name" onChange={(e) => setQuery(e.target.value)}></input>
    </div>
  );
}

export default PoseFilter;