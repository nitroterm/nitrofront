import React from 'react'

function ButtonArrow() {
  return (
    <div>
        <button 
            className='bg-[#F9E900] hover:bg-[#FFF564] rounded-xl w-12 h-12 flex items-center justify-center'
        >
            <img 
                src={require('../img/arrow.png')} 
                alt=''
                className='w-6 h-6'
            />
        </button>
    </div>
  )
}

export default ButtonArrow