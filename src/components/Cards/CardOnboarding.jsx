import React from 'react'

function CardOnboarding({
    img,
    name,
    hashtag
}) {
  return (
    <div className='border border-[#411A83] w-40 h-auto bg-[#0E0025] rounded-xl pt-8 pb-8'>
        <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="img" className='w-12 h-12 mb-8 rounded-full' />
            <h1 className='text-white text-[20px] font-bold'>{name}</h1>
            <p className='text-white text-[15px]'>#{hashtag}</p>
        </div>
    </div>
  )
}

export default CardOnboarding