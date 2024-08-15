import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const VideoDetails = () => {
  const { videoId } = useParams();

  //Sets the state to the first video in the list
  const [video, setVideo] = useState('');
  
  //error
  const [error, setError] = useState('');

  useEffect( () => {
    const getVideo = async () => {
        try {
          const response = await axios.get(`/api/videos/${videoId}`)
          setVideo(response.data)
        } catch (err) {
          if (err) setError(err.message) 
        }
    }
    getVideo()
}, [])

  return (
    <div>{video.id}</div>
  )
}

export default VideoDetails