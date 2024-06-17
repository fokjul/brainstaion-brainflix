import React from 'react'
import upload from '../../assets/icons/search.svg';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div className='searchBox'>
        <img src={upload} alt='upload'className='searchBox__icon'/>
        <input type='text' id='searchBox__input' name='searchBox__input' className='searchBox__input'placeholder='Search'/>
    </div>
  )
}

export default SearchBox