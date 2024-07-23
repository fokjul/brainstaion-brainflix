import React from 'react';
import * as Comp from '../../components/index';
import './VideoUpload.scss';
import {publish} from '../../assets/icons/'
import thumbnail from'../../assets/images/Upload-video-preview.jpg';

const VideoUpload = () => {
  return (
    <div>
     <h1 className='video-details__title'>Upload Video
     </h1>
     <div className='comment-form'>
      <div className='comment-form__container'> 
        <div className='thumbnail'>
          <div className='thumbnail__label'>Video Thumbnail</div>
          <img src={thumbnail} className='thumbnail__img'/>
        </div>
        
        <div className='form__container'>
          <Comp.Input 
              label={'title your video'}
              placeholder={'Add a title to your video'}
            />
          <Comp.TextArea 
            label={'add a video description'}
            placeholder={'Add a description to your video'}
            textAreaId={'textArea-upload'}
            textAreaName={'textArea-upload'}
            textAreaClassName={'textArea__upload'}
          />
        </div>
        
        <div className='comment-form__btn'>
          <Comp.BtnPrimary 
            imgSrc={publish}
            btnName='publish' 
            btnClass='comment-form__button'
          />
        </div>
      </div>

    </div>
    </div>
  )
}

export default VideoUpload