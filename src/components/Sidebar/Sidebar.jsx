import React from 'react';
import ButtonRegister from '../Buttons/ButtonRegister';
import ButtonMenu from '../Buttons/ButtonMenu';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='ml-16 mt-12 flex flex-col gap-[30rem]'>
        <div className='mt-12'>
            <Link to="/createpost"><ButtonRegister text="Write something"/></Link>
            <ButtonMenu text="Your Feed"/>
        </div>
        <div className='flex flex-col items-center mb-4'>
            <p className='text-gray-600 mb-2 text-sm'>You are not connected yet</p>
            <Link to='/login'><button className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-20 font-bold text-[15px] mb-2'>Login</button></Link>
            <Link to='/register'><button className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-[70px] font-bold text-[15px]'>Register</button></Link>
        </div>
    </div>
  )
}

export default Sidebar;
