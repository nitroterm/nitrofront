import React from 'react'
import {Link} from "react-router-dom";

function ButtonMenu({text}) {
  return (
    <div>
        <Link to="/login">
            <button className='text-white flex items-center bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-10 font-bold text-[15px]'>
                {text}
                <svg class="w-4 h-4 text-gray-800 dark:text-white ml-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
            </button>
        </Link>
    </div>
  )
}

export default ButtonMenu