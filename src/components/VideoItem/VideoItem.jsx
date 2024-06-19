import React from 'react'
import './VideoItem.scss'

const VideoItem = ({videoId, videoImage, videoTitle, videoChannel, setMainVideo}) => {
    
    const selectVideoFromList = () => {
        console.log(videoId)
        setMainVideo(videoId)     
    }

  return (
    <div id="videoId" className='video-preview' onClick={selectVideoFromList}>
        <div className='video-preview__container'>
            <div className='video-preview__img-container'>
                <img src={videoImage} alt='videoTitle' className='video-preview__img'/>
            </div>
            
            <div className='video-preview__text-container'>
                <p className='video-preview__title'>{videoTitle}</p>
                <p className='video-preview__channel'>{videoChannel}</p>
            </div>
        </div>
    </div>
    
  )
}

export default VideoItem