import React from 'react'
import {Link} from "react-router-dom";

function ButtonRegister({
  text
}) {
  return (
    <div>
        <Link to="/register"><button className='text-black bg-[#F9E900] hover:bg-[#FFF564] p-2 rounded-lg px-10 font-bold text-[15px] mb-4'>{text}</button></Link>
    </div>
  )
}

export default ButtonRegister