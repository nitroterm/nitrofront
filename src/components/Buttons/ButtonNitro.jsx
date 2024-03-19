import React from 'react';
import { useState } from 'react';

function ButtonNitro() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  } 

  return (
    <div>
      <button 
        className={`flex items-center justify-center ${ clicked ? 'bg-[#F9E900]' : 'bg-[#290D59]' } bg-[#290D59] ${ clicked ? 'hover:bg-[#F9E900]' : 'hover:bg-[#411A83'} hover:bg-[#411A83] rounded-xl w-12 h-12`}
        onClick={handleClick}
        >
        <img 
          src={clicked ? require('../img/NitroClicked.png') : require('../img/nitro.png')} 
          alt='nitro' 
          className='w-4 h-6' 
        />
      </button>
    </div>
  );
}

export default ButtonNitro;
