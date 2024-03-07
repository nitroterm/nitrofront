import React, { useState } from 'react'

function ButtonLike() {

    const [clicked, setClicked] = useState(false);

    const handleClick= () => {
        setClicked(!clicked);
    }

  return (
    <div className='ml-4'>
      <button 
        className={`flex items-center justify-center ${ clicked ? 'bg-[#FF5D70]' : 'bg-[#290D59]' } bg-[#290D59] hover:bg-[#411A83] rounded-xl w-14 h-14`}
        onClick={handleClick}
        >
        <img 
          src={require('../img/like.png')} 
          alt='nitro' 
          className='w-7 h-6' 
        />
      </button>
    </div>
  )
}

export default ButtonLike