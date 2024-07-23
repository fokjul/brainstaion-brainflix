import React from 'react'
import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import {upload} from '../../assets/icons';
import * as Comp from '../index.js';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
      <Link to="/"><img src={logo} alt='logo' className='logo'/></Link>
    
    <div className='header__actionContainer'>
      <Comp.SearchBox />
      <Link to="video-upload">
        <Comp.BtnPrimary 
            imgSrc={upload}
            btnName='upload'
            btnClass='btn--header'
        />
      </Link>
      
      
      <Comp.Avatar 
        avatar={avatar}
      />
    </div>
    </div>
    
    </> 
  )
}

export default Header