import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Comp from '../index.js';
import './VideoDetails.scss';
import { likes, views } from '../../assets/icons/';
import timeAgo from '../../util/timeAgoFn.js';
import { AppContext } from '../../pages/Home/Home.jsx';
import axios from 'axios';

//require('dotenv').config()
//const BASE_URL = process.env.BASE_URL
//const USER_NAME = process.env.USER_NAME

const VideoDetails = ({setDisplayMainSection, deleteVideo}) => {
  const {video} = useContext(AppContext)
  const { videoId } = useParams(); //grabs id from URL if any
  const [error, setError] = useState('')

  // const deleteVideo = async (videoId) => {
  //   if(video.id === videoId) {
  //     try {
  //       await axios.delete(`/videos/${videoId}`)
  //       setDisplayMainSection(false)
  //     } catch (err) {
  //       if(err) setError(err.message)
  //     }
  //   }
  // }

  if (!video) return <div>Loading...</div>;
  return (
    <div className='video-details'>
      <div className='video-details__title-container'>
          <h1 className='video-details__title'>{video.title}
          </h1>
          {video.channel === 'Yuliia Fok' && <Comp.BtnSecondary 
            btnLabel = "Delete Video"
            handleClick = {() => deleteVideo(videoId)}
          />}
      </div>
          
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