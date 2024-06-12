import React from 'react';
import './BtnPrimary.scss';
export default function BtnPrimary({imgSrc, btnName}) {
    return <>
        <button className='btn'>
            <div className='btn__icon' background-image={}></div>
            <span>{btnName}</span>
        </button>
    </>
}