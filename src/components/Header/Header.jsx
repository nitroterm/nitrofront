import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-center w-full py-4 top-0 fixed z-0 bg-[#080016]'>
      <div className=''>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
