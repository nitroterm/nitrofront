import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-center w-full p-4'>
      <div className=''>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
