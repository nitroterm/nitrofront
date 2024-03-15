import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex items-center'>
        <img src={require('../img/logo.png')} alt="nitro" className='h-28'/>
      </div>
      <div className='flex items-center flex-grow justify-center mr-80'>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
