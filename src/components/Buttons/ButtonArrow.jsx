import React from 'react'
import sendIcon from '../img/send_icon.svg';

function ButtonArrow({onClick = undefined}) {
  return (
    <div>
        <button
            onClick={onClick}
            className='bg-[#F9E900] hover:bg-[#FFF564] rounded-md w-10 h-10 flex items-center justify-center'
        >
            <img 
                src={sendIcon}
                alt='Send'
                className='w-4 h-4'
            />
        </button>
    </div>
  )
}

export default ButtonArrow