import React from 'react'

function BadgeProduct({
  text,
}) {
  return (
    <div>
        <button className='text-black font-bold text-[13px] bg-[#B2FFF6] rounded-lg p-1 px-4 cursor-default mr-8'>{text}</button>
    </div>
  )
}

export default BadgeProduct