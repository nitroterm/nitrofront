import React, { useState } from 'react';

function ButtonNitro() {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (clicked) {
      setCount(0);
    } else {
      setCount(1);
    }
    setClicked(!clicked);
  };

  return (
    <div className='flex items-center'>
      <p className='mr-2 text-slate-500'>{count}</p>
      <button
        className={`flex items-center justify-center ${clicked ? 'bg-[#F9E900]' : 'bg-[#290D59]'} bg-[#290D59] ${clicked ? 'hover:bg-[#F9E900]' : 'hover:bg-[#411A83'} hover:bg-[#411A83] rounded-lg w-12 h-12`}
        onClick={handleClick}>
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
