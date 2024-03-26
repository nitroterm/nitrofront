import React from 'react'

function ButtonRegister({
  text
}) {
  return (
    <div>
        <button className='text-black bg-[#F9E900] hover:bg-[#FFF564] p-2 rounded-lg px-10 font-bold text-[15px] mb-4'>{text}</button>
    </div>
  )
}

export default ButtonRegister