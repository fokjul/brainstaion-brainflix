import './BtnSecondary.scss'
import React from 'react'

const BtnSecondary = ({btnLabel, handleClick, btnId}) => {
  return (
    <button id={btnId} className='btnSecondary' onClick={handleClick}>
        <span className='btnSecondary__label'>{btnLabel}</span>
    </button>
  )
}

export default BtnSecondary