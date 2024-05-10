import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonMenu from '../Buttons/ButtonMenu';
import { Link } from 'react-router-dom';
import {nbLoggedIn} from "../../lib/nitroback";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import {Profile} from "../Common/Profile";

function Sidebar() {
  return (
      <div className='flex flex-col fixed top-0 h-full p-4'>
          <Link to="/"><img src={require('../img/logo.png')} alt="nitroterm logo"
                            className='h-12 object-contain mb-10'/></Link>
          {
              nbLoggedIn() ? <>
                  <div className='flex flex-col items-stretch gap-2'>
                      <Link to="/createpost"><ButtonPrimary text="Write something"/></Link>
                      <Link to="/createpost"><ButtonSecondary text="Your feed"/></Link>
                  </div>
              </> : <></>
          }
          <div className='flex-1'></div>
          <div>
              {
                  nbLoggedIn() ? <div>
                      <Profile/>
                  </div> : <div className='flex flex-col items-center mb-4'>
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
