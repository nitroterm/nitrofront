import React from 'react'

function ButtonLogin({
  text
}) {

  return (
    <div>
      <button className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-xl px-10 font-bold text-[15px]'>{text}</button>
    </div>
  )
}

export default ButtonLogin