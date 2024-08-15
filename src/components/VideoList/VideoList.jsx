import React from 'react';
import * as Comp from '../index.js';
import './VideoList.scss';
import { useContext } from 'react';
import { AppContext } from '../../pages/Home/Home.jsx';
import { Link } from 'react-router-dom';

const VideoList = ({videos}) => {
  const {mainVideoId} = useContext(AppContext)
  
  return (
    <div className='videoList'>
      <p className='videoList__listLabel'>next video</p>
      <ul>
        {videos.map((video) => (
          mainVideoId !== video.id && (
          <li key={video.id} onClick={() => {window.scrollTo(0,0)}}>
            <Link to={`/${video.id}`} >
              <Comp.VideoItem 
                videoId = {video.id}
                videoImage = {video.image}
                videoTitle = {video.title}
                videoChannel = {video.channel}
              />
            </Link>
          </li>    
        )))}
      </ul>
    </div>
  )
}

export default VideoList