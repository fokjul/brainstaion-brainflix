import React from 'react'
import {add_comment} from '../../assets/icons/'
import * as Comp from '../index.js';
import './CommentForm.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';

const CommentForm = ({handleFormSubmit, hadleInputValue, inputValue}) => {
  
  return (
    <div className='comment-form'>
      <div className='comment-form__avatar'>
        <Comp.Avatar 
          avatar={avatar}
        />
      </div>
      <form className='comment-form__container' onSubmit={handleFormSubmit}>
        <div className='comment-form__input'>
          <Comp.TextArea 
            label={'join the conversation'}
            placeholder={'Add a new comment'}
            textAreaId={'textArea-comment'}
            textAreaName={'textArea-comment'}
            textAreaClassName={'textArea__field'}
            handleInputValue={hadleInputValue}
            inputValue={inputValue}
          />
        </div>
        
        <div className='comment-form__btn'>
          <Comp.BtnPrimary 
            imgSrc={add_comment}
            btnName='comment' 
            btnClass='comment-form__button'
          />
        </div>
      </form>
    </div>
  )
}

export default CommentForm