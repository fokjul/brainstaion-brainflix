import React from 'react';
import * as Comp from '../index.js';
import './ContentBlock.scss';

const ContentBlock = ({video, comments, setComments, mainVideoId}) => {
  
  if (!video) {
    return <div>Video info is not available</div>
  }

  return (
    <div className='contentBlock'>
        <Comp.VideoDetails 
          video={video}
        />
        <Comp.VideoComments
          video={video} 
          setComments={setComments}
          comments={comments}
          mainVideoId={mainVideoId}
        />

    </div>
  )
}

export default ContentBlock