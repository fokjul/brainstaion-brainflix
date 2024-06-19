import React from 'react';
import * as Comp from '../index.js';
import './VideoComments.scss';
import videos from '../../data/video-details.json';

const VideoComments = ({video}) => {
  return (
    <div className='comments'>
      <p className='comments__qty'>{`${video.comments.length} comments`}</p>
      <Comp.CommentForm />
      {video.comments.map(comment => (
        <Comp.CommentItem 
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          timestamp={comment.timestamp}
      /> 
      ))}
      
      
      

    </div>
  )
}

export default VideoComments