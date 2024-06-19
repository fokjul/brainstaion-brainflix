import React from 'react';
import './CommentItem.scss';
import VideoMetaInfo from '../VideoMetaInfo/VideoMetaInfo';
import Avatar from '../Avatar/Avatar';
import timeAgo from '../../../util/timeAgoFn.js';


const CommentItem = ({name, comment, timestamp}) => {
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
        </div>
    </div>
    
  )
}

export default CommentItem