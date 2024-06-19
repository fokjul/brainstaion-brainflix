import React from 'react'
import {add_comment} from '../../assets/icons/'
import * as Comp from '../index.js';
import './CommentForm.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';

const CommentForm = () => {
  return (
    <div className='comment-form'>
      <div className='comment-form__avatar'>
        <Comp.Avatar 
          avatar={avatar}
        />
      </div>
      <div className='comment-form__container'>
        <div className='comment-form__input'>
          <Comp.Input />
        </div>
        
        <div className='comment-form__btn'>
          <Comp.BtnPrimary 
            imgSrc={add_comment}
            btnName='comment' 
            btnClass='comment-form__button'
          />
        </div>
      </div>

    </div>
  )
}

export default CommentForm