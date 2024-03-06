import React from 'react'

function BadgeProduct({
  Product
}) {
  return (
    <div>
        <button className='text-black font-bold text-[13px] bg-[#B2FFF6] rounded-lg p-1 px-4 cursor-default'>{Product}</button>
    </div>
  )
}

export default BadgeProduct