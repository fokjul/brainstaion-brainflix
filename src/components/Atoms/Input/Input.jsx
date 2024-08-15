import React from 'react';
import './Input.scss';

const Input = ({label, placeholder, handleInputValue, inputValue}) => {
  return (
    <div className='input'>
        <label htmlFor='input-upload' className='input__label'>{label}</label>
        <input 
          type="text" 
          id='input-upload' 
          name='input-upload' 
          className='input__field' 
          placeholder={placeholder} 
          value={inputValue}
          onChange={(e)=> handleInputValue(e)}/>
    </div>
  )
}

export default Input