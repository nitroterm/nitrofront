import React from 'react'
import { useState } from 'react'

function ButtonFork() {

    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const [count, setCount] = useState(0);

    const handleHover = () => {
        setHover(!hover);
    }

    const handleClick = () => {
      if (clicked){
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
        className={`flex items-center justify-center ${ clicked ? 'bg-[#F9E900]' : 'bg-[#290D59]' } bg-[#290D59] ${ clicked ? 'hover:bg-[#F9E900]' : 'hover:bg-[#411A83]'} hover:bg-[#411A83] rounded-lg w-10 h-10`}
        onClick={handleClick}
        onMouseLeave={handleHover}
        >
        <img 
          src={clicked ? require('../img/forkClicked.png') : (hover ? require('../img/forkHover.png') : require('../img/fork.png'))} 
          alt='nitro' 
          className='w-5 h-6' 
        />
      </button>
    </div>
  )
}

export default ButtonFork