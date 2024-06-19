import React from 'react';
import videos from '../../data/video-details.json'
import * as Comp from '../index.js';
import './VideoList.scss';

const VideoList = ({mainVideoId, setMainVideo}) => {

  return (
    <div className='videoList'>
      <p className='videoList__listLabel'>next video</p>
      {videos.map((video) => (
        mainVideoId !== video.id && (<Comp.VideoItem 
          key = {video.id}
          videoId = {video.id}
          videoImage = {video.image}
          videoTitle = {video.title}
          videoChannel = {video.channel}
          setMainVideo = {setMainVideo}
          mainVideoId = {mainVideoId}
        />)
        
      ))}
    </div>
  )
}

export default VideoList