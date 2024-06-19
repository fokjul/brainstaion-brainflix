import React from 'react';
import './Avatar.scss';


const Avatar = ({avatar}) => {
  return (
    avatar ? <img src={avatar} alt="avatar" className='avatar'/> : <div className='avatar__bg'></div>
  )
    
}

export default Avatar