import React from 'react'
import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import {upload} from '../../assets/icons';
import * as Comp from '../index.js';
import avatar from '../../assets/images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <>
    <div className='header'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='header__actionContainer'>
      <Comp.SearchBox />
      <Comp.BtnPrimary 
        imgSrc={upload}
        btnName='upload'
        btnClass='btn--header'
      />
      <Comp.Avatar 
        avatar={avatar}
      />
    </div>
    </div>
    
    </> 
  )
}

export default Header