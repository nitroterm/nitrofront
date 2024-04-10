import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex items-center justify-between w-full p-4'>
      <div className='flex items-center'>
        <Link to="/"><img src={require('../img/logo.png')} alt="nitro" className='h-20'/></Link>
      </div>
      <div className='flex items-center flex-grow justify-center mr-80'>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
