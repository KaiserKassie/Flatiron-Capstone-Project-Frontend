import React, {useState} from 'react';
import Pose from './Pose';
import PoseFilter from './PoseFilter';

function Poses({fetchPoses, favPoseList, setFavPoseList, setPoses, poses, login, setFilteredPoses, query, setQuery}) {

  const renderPoses = (query === "") ? poses.map((pose) => (
    <Pose key={pose.id} pose={pose} login={login} favPoseList={favPoseList} setFavPoseList={setFavPoseList} fetchPoses={fetchPoses}/>
  )) : poses
  .filter((thisPose) => thisPose.name.toLowerCase().includes(query.toLowerCase()))
  .map((thisPose) => (<Pose key={thisPose.id} pose={thisPose} login={login} favPoseList={favPoseList} setFavPoseList={setFavPoseList} fetchPoses={fetchPoses}/>));
  
  return(
    <div id='poses' className='lists'>
      <h1 className='title'>Yoga Poses</h1>
      <PoseFilter poses={poses} setPoses={setPoses} setFilteredPoses={setFilteredPoses} setQuery={setQuery} query={query}/>
      {renderPoses}
    </div>
  );
}

export default Poses;