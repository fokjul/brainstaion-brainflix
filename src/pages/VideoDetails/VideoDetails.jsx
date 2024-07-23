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
          const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=bd639221-9c5b-420e-826c-d01265d31e6e`)
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