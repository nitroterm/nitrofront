import React from 'react'
import ButtonRegister from '../Buttons/ButtonRegister'
import ButtonMenu from '../Buttons/ButtonMenu'
import ButtonLogin from '../Buttons/ButtonLogin'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='ml-16 mt-12 flex flex-col justify-between h-auto'>
        <div>
            <ButtonRegister text="Write something"/>
            <ButtonMenu text="Your Feed"/>
        </div>
        <div className=''>
            <Link to='/login'><ButtonLogin text="Login"/></Link>
            <Link to='/register'><ButtonLogin text="Register"/></Link>
        </div>
    </div>
  )
}

export default Sidebar