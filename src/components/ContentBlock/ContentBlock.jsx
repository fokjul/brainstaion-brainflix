import React, { useContext } from 'react';
import * as Comp from '../index.js';
import './ContentBlock.scss';
import { AppContext } from '../../pages/Home/Home.jsx';

const ContentBlock = ({comments, setComments}) => {
  const {video} = useContext(AppContext)
  if (!video) {
    return <div>Video info is not available</div>
  }

  return (
    <div className='contentBlock'>
        <Comp.VideoDetails 
          //video={video}
        />
        <Comp.VideoComments
          setComments={setComments}
          comments={comments}
        />

    </div>
  )
}

export default ContentBlock