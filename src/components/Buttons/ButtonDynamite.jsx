import React, { useState } from 'react'

function ButtonDynamite() {

    const [clicked, setClicked] = useState(false);

    const handleClick= () => {
        setClicked(!clicked);
    }

  return (
    <div>
      <button 
        className={`flex items-center justify-center ${ clicked ? 'bg-[#FF5D70]' : 'bg-[#290D59]' } bg-[#290D59] ${ clicked ? 'hover:bg-[#FF687A]' : 'hover:bg-[#411A83]' } rounded-xl w-10 h-10`}
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