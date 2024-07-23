import React from 'react';
import './TextArea.scss';

const TextArea = ({textAreaId, textAreaName, textAreaClassName, label, placeholder}) => {
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
          placeholder={placeholder}>
        </textarea>
    </div>
  )
}

export default TextArea