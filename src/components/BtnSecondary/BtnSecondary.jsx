import React from 'react';
import './BtnSecondary.scss';

const BtnSecondary = ({btnName, btnClass = '', btnId}) =>  {
    return (
        <button className={`${btnClass}`} id={btnId}>
            <span className='btn-secondary__label'>{btnName}</span>
        </button>
    );
}

export default BtnSecondary