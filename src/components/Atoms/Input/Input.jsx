import React from 'react';
import './Input.scss';

const Input = () => {
  return (
    <div className='input'>
        <label htmlFor='input-comment' className='input__label'>join the conversation</label>
        <textarea type='text' id='input-comment' name='input-comment' className='input__field'placeholder='Add a new comment'></textarea>
    </div>
  )
}

export default Input