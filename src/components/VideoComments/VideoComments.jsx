import React, { useContext } from 'react';
import * as Comp from '../index.js';
import './VideoComments.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../pages/Home/Home.jsx';
import {v4 as uuidv4} from 'uuid'; //to generate unique id for comments

const VideoComments = ({setComments, comments}) => {
  const {mainVideoId} = useContext(AppContext)
  const [error, setError] = useState('');
  const baseUrl = '/videos/';
  const [inputValue, setInputValue] = useState('');
  const { videoId } = useParams(); //to grab video id from URL
  const itemId = videoId ? videoId : mainVideoId;
  
  const body = {
    id: uuidv4(),
    name: 'Yuliia Fok', 
    comment: inputValue,
    likes: 0,
    timestamp: Date.now(),
  }

  const getComments = async () => {
    try {
        const response = await axios.get(baseUrl + itemId)
        const updatedComments = response.data.comments
        if(updatedComments) {setComments([...updatedComments])} 
    } catch (err) {
        if (err) setError(err.message) 
    }
  }
    
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const postComment = async () => {
      try {
        await axios.post(`${baseUrl}${itemId}/comments`, body);
      } catch (err) {
        if (err) setError(err.message)
      }
    }
    await postComment();
    await getComments();
    setInputValue('');
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const deleteComment = async(commentId) => {
    try {
      await axios.delete(baseUrl + itemId + '/comments/' + commentId)
      await getComments();
    } catch (err) {
      if (err) setError(err.message) 
    }
  }

  return (
    <div className='comments'>
      <p className='comments__qty'>{`${comments.length} comments`}</p> 
      <Comp.CommentForm 
        handleFormSubmit={handleFormSubmit} 
        handleInputValue={handleInputValue}
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
          myName={body.name}
      /> 
      ))}
    </div>
  )
}

export default VideoComments