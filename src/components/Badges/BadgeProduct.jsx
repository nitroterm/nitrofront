import React from 'react'

function BadgeProduct({
  text,
}) {
  return (
    <div>
        <button className='text-black font-bold text-[10px] bg-[#B2FFF6] rounded-lg p-1 px-3 cursor-default mr-2'>{text}</button>
    </div>
  )
}

export default BadgeProduct