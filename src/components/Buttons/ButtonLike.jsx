import React, { useState } from 'react'

function ButtonLike() {

    const [clicked, setClicked] = useState(false);

    const handleClick= () => {
        setClicked(!clicked);
    }

  return (
    <div className='ml-2 mr-20'>
      <button 
        className={`flex items-center justify-center ${ clicked ? 'bg-[#FF5D70]' : 'bg-[#290D59]' } bg-[#290D59] ${ clicked ? 'hover:bg-[#FF5D70]' : 'hover:bg-[#411A83]' } hover:bg-[#411A83] rounded-xl w-10 h-10`}
        onClick={handleClick}
        >
        <img 
          src={require('../img/like.png')} 
          alt='nitro' 
          className='w-5 h-4'
        />
      </button>
    </div>
  )
}

export default ButtonLike