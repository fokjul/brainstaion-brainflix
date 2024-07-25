import React from 'react';
import * as Comp from '../../components/index';
import './VideoUpload.scss';
import {publish} from '../../assets/icons/'
import thumbnail from'../../assets/images/Upload-video-preview.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoUpload = () => {
  const [displayForm, setDisplayForm] = useState(true)

  const navigate = useNavigate();
  let msToEnd = 0;
  const delay = 5000;
  const [timeLeft, setTimeLeft] = useState(delay);
  

  function handleFormSubmit(e){
    e.preventDefault();
    setDisplayForm(false)
    

    const timeToRedirect = setInterval(() => {
      console.log(setTimeLeft((timeLeft) => (timeLeft - 1000)))
    }, 1000);

    setTimeout(()=> { 
      navigate('/')
      clearInterval(timeToRedirect)
    
    }, delay)


  }
  return (
    <div className='upload'>
      <h1 className='upload__title'>Upload Video
      </h1>
      <div>
        <p style={{display: displayForm ? 'none' : 'block'}}>{`Video has been uploaded ${timeLeft / 1000} sec`}</p>
      </div>
      <form className='uploadForm' onSubmit={handleFormSubmit} style={{display: displayForm ? 'block' : 'none'}}>
        <div className='uploadForm__wrapper'>
          <div className='uploadForm__container'> 
            <div className='uploadForm__thumbnail'>
              <div className='uploadForm__thumbnail-label'>Video Thumbnail</div>
              <img src={thumbnail} className='uploadForm__thumbnail-img' alt='video thumbnail'/>
            </div>
            <div className='uploadForm__inputs'>
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
        </div>
        </div>
       
        <div className="uploadForm__btn-container">
            <div className='uploadForm__buttons'>
              <Comp.BtnSecondary 
                btnName='cancel' 
                btnClass='btn-secondary'
                btnId='cancelUpload'
              />
              <Comp.BtnPrimary 
                imgSrc={publish}
                btnName='publish' 
                btnClass='comment-form__button'
                btnId='publishButton'
              />
            </div>
          </div>
      </form>
    </div>
  )
}

export default VideoUpload