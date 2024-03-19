import React from 'react'
import {Link} from "react-router-dom";

function ButtonLogin({
  text
}) {

  return (
    <div>
        <Link to="/login"><button className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-10 font-bold text-[15px]'>{text}</button></Link>
    </div>
  )
}

export default ButtonLogin