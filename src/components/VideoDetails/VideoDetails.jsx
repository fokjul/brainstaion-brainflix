import React from 'react';
import * as Comp from '../index.js';
import './VideoDetails.scss';
import { likes, views } from '../../assets/icons/';
import timeAgo from '../../util/timeAgoFn.js';

const VideoDetails = ({video}) => {

  return (
    <div className='video-details'>
          <h1 className='video-details__title'>{video.title}
          </h1>
          <div className='video-details__container'>
            <div className='video-details__metaInfo'>
              <p className='video-details__channel'>{video.channel}</p> 
              <Comp.VideoMetaInfo 
                iconSrc=''
                display='none'
                videoMetaInfo={timeAgo(video.timestamp)}
              />
            </div>
            <div className='video-details__metaInfo'>
              <Comp.VideoMetaInfo 
                iconSrc={views}
                videoMetaInfo={video.views}
              />
              <Comp.VideoMetaInfo 
                iconSrc={likes}
                videoMetaInfo={video.likes}
              />
            </div>
          </div>
          <p className='video-details__description'>{video.description}</p> 
    </div>
  )
}

export default VideoDetails