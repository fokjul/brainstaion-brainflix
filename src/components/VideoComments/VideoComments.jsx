import React from 'react';
import * as Comp from '../index.js';
import './VideoComments.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoComments = ({video, setComments, comments, mainVideoId}) => {

  const [error, setError] = useState('');
  const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/videos/';
  const api = '?api_key=bd639221-9c5b-420e-826c-d01265d31e6e';
  const [inputValue, setInputValue] = useState('');
  const { videoId } = useParams(); //grabs id from URL if any
  const itemId = videoId ? videoId : mainVideoId;
  const body = {
    name: 'Yuliia Fok', 
    comment: inputValue
  }

  const getComments = async () => {
    try {
        const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${itemId}?api_key=bd639221-9c5b-420e-826c-d01265d31e6e`)
        const updatedComments = response.data.comments
        updatedComments && setComments(updatedComments) 
    } catch (err) {
        if (err) setError(err.message) 
    }
  }
    
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const postComment = async () => {
      try {
        const response = await axios.post(baseUrl + itemId + '/comments' + api, body);
      } catch (err) {
        if (err) setError(err.message)
      }
    }
    await postComment();
    await getComments();
    setInputValue('');
  }

  const hadleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const deleteComment = async (commentId) => {
    try {
      const req = baseUrl + itemId + '/comments/' + commentId + api;
      await axios.delete(req)
      getComments();
      

  } catch (err) {
      if (err) setError(err.message) 
    }
  }

  return (
    <div className='comments'>
      <p className='comments__qty'>{`${comments.length} comments`}</p> 
      <Comp.CommentForm 
        handleFormSubmit={handleFormSubmit} hadleInputValue={hadleInputValue}
        inputValue={inputValue}
      />
      {comments.map(comment => (
        <Comp.CommentItem 
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          timestamp={comment.timestamp}
          deleteComment={deleteComment}
          commentId={comment.id}
      /> 
      ))}
    </div>
  )
}

export default VideoComments