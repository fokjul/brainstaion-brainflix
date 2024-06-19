import React from 'react';
import './BtnPrimary.scss';

const BtnPrimary = ({imgSrc, btnName, btnClass = ''}) =>  {
    return (
        <button className={`btn ${btnClass}`}>
            <img src={imgSrc} className='btn__icon' alt={`${btnName} icon`}/>
            <span className='btn__label'>{btnName}</span>
            <div></div>
        </button>
    );
}

export default BtnPrimary