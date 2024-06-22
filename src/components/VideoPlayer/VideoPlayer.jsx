import React from 'react'
import './VideoPlayer.scss';
import {play, fullscreen, volume_up} from '../../assets/icons';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Video not found</div>
  }

  return (
    <div className='player'>
        <div className='player__container'>
            <video poster={video.image} className='player__video' controls>
                <source src={video.video} type="video/mp4" ></source>
            </video>
        </div>
    </div>
  )
}

export default VideoPlayer

