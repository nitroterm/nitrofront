import React from 'react'

function ButtonPrimary({
  text
}) {
  return (
    <div>
        <button className='text-black bg-[#F9E900] hover:bg-[#FFF564] p-2 rounded-lg px-10 font-bold text-[15px] w-full'>{text}</button>
    </div>
  )
}

export default ButtonPrimary