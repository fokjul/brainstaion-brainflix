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
            <video poster={video.image} className='player__video'>
                <source src={video.video} type="video/mp4"></source>
            </video>
            <div className='player__actions'>
                    <div className='player__actions--controls'>
                    <img src={play} alt='icon play'className='player__actions--icon'/>
                        
                    </div>
                    <div className='player__actions--controls flex-grow'>
                        <div className='player__actions--slider' />
                        <p className='player__actions--time'>{`0:00 / ${video.duration}`}</p>
                    </div>
                    <div className='player__actions--controls'>
                    <img src={fullscreen} alt='icon fullscreen'className='player__actions--icon'/>
                        
                    <img src={volume_up} alt='icon volume ups'className='player__actions--icon'/>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default VideoPlayer

