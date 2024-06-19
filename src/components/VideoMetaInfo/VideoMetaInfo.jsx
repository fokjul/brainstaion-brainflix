import React from 'react';


const VideoMetaInfo = ({videoLikes, iconSrc}) => {

  return (
    <div className='container'>
      <img src={iconSrc} alt='icon' className='icon'/>
      <p className='label'>{videoLikes}</p>
    </div>
    
  )
}

export default VideoMetaInfo