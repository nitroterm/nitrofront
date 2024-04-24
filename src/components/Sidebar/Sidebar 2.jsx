import React from 'react';
import ButtonRegister from '../Buttons/ButtonRegister';
import ButtonMenu from '../Buttons/ButtonMenu';
import { Link } from 'react-router-dom';
import {nbLoggedIn} from "../../lib/nitroback";

function Sidebar() {
  return (
    <div className='ml-16 mt-12 flex flex-col justify-between'>
        <div className="">
            <ButtonRegister text="Write something"/>
            <ButtonMenu text="Your Feed"/>
        </div>
        <div className='flex flex-col items-center mb-4'>
            {
                nbLoggedIn() ? <div>
                    <p className='text-gray-600 mb-2 text-sm'>connected</p>
                </div> : <div>
                    <p className='text-gray-600 mb-2 text-sm'>You are not connected yet</p>
                    <Link to='/login'>
                        <button
                            className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-20 font-bold text-[15px] mb-2'>Login
                        </button>
                    </Link>
                    <Link to='/register'>
                        <button
                            className='text-white bg-[#290D59] hover:bg-[#411A83] p-2 rounded-lg px-[70px] font-bold text-[15px]'>Register
                        </button>
                    </Link>
                </div>
            }
        </div>
    </div>
  )
}

export default Sidebar;
