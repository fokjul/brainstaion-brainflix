import React from 'react';
import './VideoMetaInfo.scss';

const VideoMetaInfo = ({videoMetaInfo, iconSrc, display}) => {

  return (
    <div className='videoMetaInfo__container'>
      <img src={iconSrc} alt='icon' className='videoMetaInfo__icon' style={{display:display}}/>
      <p className='videoMetaInfo__label'>{videoMetaInfo}</p>
    </div>
    
  )
}

export default VideoMetaInfo