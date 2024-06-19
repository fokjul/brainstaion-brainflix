import React from 'react';
import * as Comp from '../index.js';
import './ContentBlock.scss';

const ContentBlock = ({video}) => {
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
        />

    </div>
  )
}

export default ContentBlock