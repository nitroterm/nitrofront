import React from 'react'
import { useState } from 'react'

function ButtonFork() {

    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    const handleClick = () => {
        setClicked(!clicked);
    }

  return (
    <div>
      <button 
        className={`flex items-center justify-center ${ clicked ? 'bg-[#F9E900]' : 'bg-[#290D59]' } bg-[#290D59] hover:bg-[#411A83] rounded-xl w-10 h-10`}
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