import React from 'react';
import Pose from './Pose';
import PoseFilter from './PoseFilter';

function Poses() {


  return(
    <div id='poses'>
      <h1>Poses</h1>
      <PoseFilter />
      <Pose />
    </div>
  );
}

export default Poses;