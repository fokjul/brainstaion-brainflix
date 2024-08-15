import React from 'react';
import './TextArea.scss';

const TextArea = ({textAreaId, textAreaName, textAreaClassName, label, placeholder, inputValue, handleInputValue}) => {
  return (
    <div className='textArea'>
        <label 
          htmlFor={textAreaName} 
          className='input__label'>{label}
        </label>
        <textarea 
          id={textAreaId} 
          name={textAreaName} 
          className={textAreaClassName} 
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
          >
          
        </textarea>
    </div>
  )
}

export default TextArea