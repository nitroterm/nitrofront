import React from 'react';

function SearchBar() {
  return (
    <div className='border border-[#411A83] rounded-lg'>
      <div className="relative flex items-center w-96 p-1 rounded-lg bg-[#0D0023] overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="yellow">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className="peer bg-[#0D0023] h-full w-96 outline-none text-sm text-white pr-2"
          type="search"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
