import React from 'react'
import './VideoPlayer.scss';
import {play, fullscreen, volume_up} from '../../assets/icons';

const VideoPlayer = () => {
  return (
    <div className='player'>
        <div className='player__container'>
            <video poster="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg" className='player__video'>
                <source src="" type="video/mp4"></source>
            </video>
            <div className='player__actions'>
                    <div className='player__actions--controls'>
                    <img src={play} alt='icon play'className='player__actions--icon'/>
                        
                    </div>
                    <div className='player__actions--controls flex-grow'>
                        <div className='player__actions--slider' />
                        <span className='player__actions--time'>0:00/4:01</span>
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

