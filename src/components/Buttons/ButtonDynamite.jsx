import React, { useState } from 'react'

function ButtonDynamite({post}) {

    const [clicked, setClicked] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick= () => {
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
        className={`flex items-center justify-center ${ clicked ? 'bg-[#FF5D70]' : 'bg-[#290D59]' } bg-[#290D59] ${ clicked ? 'hover:bg-[#FF687A]' : 'hover:bg-[#411A83]' } rounded-lg w-10 h-10`}
        onClick={handleClick}
        >
        <img 
          src={require('../img/dynamite.png')} 
          alt='nitro' 
          className='w-7 h-6' 
        />
      </button>
    </div>
  )
}

export default ButtonDynamite