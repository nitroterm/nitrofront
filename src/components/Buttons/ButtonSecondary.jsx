import React from 'react'
import arrowLined from '../img/arrow_lined.svg';

function ButtonSecondary({
                             text,
                             arrow = true,
                             onClick = undefined
                         }) {

    return (
        <div>
            <button
                onClick={onClick}
                className='text-white text-left bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-5 text-[15px] mb-4 w-full flex items-center'>
                {text}
                {
                    arrow ? <>
                        <div className='flex-1'></div>
                        <img src={arrowLined} alt="arrow"></img>
                    </> : (<div></div>)
                }
            </button>
        </div>
    )
}

export default ButtonSecondary