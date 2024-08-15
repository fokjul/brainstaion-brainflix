import React, { useEffect } from 'react';
import * as Comp from '../../components/index';
import './VideoUpload.scss';
import {publish} from '../../assets/icons/'
import thumbnail from'../../assets/images/Upload-video-preview.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'; //to generate unique id for comments
import redirectToHomePage from '../../util/redirectToHomePage';

const VideoUpload = () => {
  //State to hide form after upload
  const [displayForm, setDisplayForm] = useState(true)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  //For redicrect to home page
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(null);
  const [error, setError] = useState(null)

  const body = {
    id: uuidv4(),
    title: titleValue,
    channel: "Yuliia Fok",
    image: thumbnail,
    description: descriptionValue,
    views: 0,
    likes: 0,
    duration: 0,
    video: '',
    timestamp: Date.now(),
    comments: []
  }

  const handleTitleValue = (e) => {
    if(!e.target.value) {console.log('No title value')}
    setTitleValue(e.target.value)
  }

  const handleDescriptionValue = (e) => {
    if(!e.target.value) {console.log('No description value')}
    setDescriptionValue(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('/videos', body)
      setDisplayForm(false)
      redirectToHomePage(setTimeLeft, navigate)
      
    } catch (err) {
      if (err) setError(err.message)
    }
    
  }
  return (
    <div className='upload'>
      <h1 className='upload__title'>Upload Video
      </h1>
      <Comp.SuccessMessage 
        displaySettings={displayForm}
        action='uploaded'
        timeLeft={timeLeft}
      />
      <form className={`uploadForm ${displayForm ? 'display' : 'displayNone'}`} onSubmit={handleFormSubmit} >
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
                handleInputValue={handleTitleValue}
                inputValue={titleValue}
              />
              <Comp.TextArea 
                label={'add a video description'}
                placeholder={'Add a description to your video'}
                textAreaId={'textArea-upload'}
                textAreaName={'textArea-upload'}
                textAreaClassName={'textArea__upload'}
                handleInputValue={handleDescriptionValue}
                inputValue={descriptionValue}
              />
            </div>
        </div>
        </div>
       
        <div className="uploadForm__btn-container">
            <div className='uploadForm__buttons'>
              <Comp.BtnSecondary 
                btnLabel='cancel' 
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