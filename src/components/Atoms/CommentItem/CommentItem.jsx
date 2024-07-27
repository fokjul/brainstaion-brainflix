import React from 'react';
import './CommentItem.scss';
import VideoMetaInfo from '../VideoMetaInfo/VideoMetaInfo';
import Avatar from '../Avatar/Avatar';
import timeAgo from '../../../util/timeAgoFn.js';


const CommentItem = ({name, comment, timestamp, deleteComment, commentId}) => 
{
  return (
    <div className="comment">
        <Avatar 
            avatar = {false}
        />
        <div className='comment__body'>
            <div className='comment__wrapper'>
                <p className='comment__name'>{name}</p>
                <VideoMetaInfo 
                    videoMetaInfo={timeAgo(timestamp)}
                    iconSrc=''
                    display='none'
                />
            </div>
            <p className='comment__description'>{comment}</p>
            <button className='comment__deleteBtn' onClick={() => deleteComment(commentId)}>Delete</button>
        </div>
    </div>
    
  )
}

export default CommentItem