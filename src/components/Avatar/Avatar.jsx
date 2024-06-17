import React from 'react';
import './Avatar.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';

const Avatar = () => {
  return (
    <img src={avatar} alt="avatar" className='avatar'/>
  )
}

export default Avatar